import cv2
import json

with open('.settings.json', 'r') as settings:
    settingsJson = json.load(settings)
    
with open(settingsJson['defConfFile'], 'r') as lang:
    langJson = json.load(lang)
    
detectionText = langJson['camera']['MotionDetection']['detectionText']

if langJson['camera']['MotionDetection']['detectionText'] == 'dT':
    detectionText = 'Motion Detected!'
else:
    detectionText = langJson['camera']['MotionDetection']['detectionText']

def motion_detection():
    
    cap = cv2.VideoCapture(0)
    ret, frame1 = cap.read()
    ret, frame2 = cap.read()
    
    while cap.isOpened():
        diff = cv2.absdiff(frame1, frame2)
        gray = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
        blur = cv2.GaussianBlur(gray, (5, 5), 0)
        _, thresh = cv2.threshold(blur, 20, 255, cv2.THRESH_BINARY)
        dilated = cv2.dilate(thresh, None, iterations=3)
        
        contours, _ = cv2.findContours(dilated, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
        
        for contour in contours:
            (x, y, w, h) = cv2.boundingRect(contour)
            
            if cv2.contourArea(contour) < 700:
                continue
            cv2.rectangle(frame1, (x, y), (x+w, y+h), (0, 255, 0), 2)
            cv2.putText(frame1, detectionText, (180, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
            
        cv2.imshow('Motion Detection', frame1)
        
        frame1 = frame2
        ret, frame2 = cap.read()
        
        if cv2.waitKey(10) == ord('q'):
            break
    
    cap.release()
    cv2.destroyAllWindows()
    
motion_detection()