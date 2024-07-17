VERSION: 1.0

This is a project i made in my basement. I made it to simplify things(rn it can only run html files in server "i will maybe add more things"). Let me show how to run html file on the server(localhost). We gonna use lang.json file.
When you open lang.json file you may see something like this:

![Screenshot 2024-07-14 104508](https://github.com/user-attachments/assets/2fe89b28-d5d0-45de-b9d8-91c187f724ae)

Now we gotta add LiveS:

![Screenshot 2024-07-14 104652](https://github.com/user-attachments/assets/cfd35b23-9cc8-4651-a8a1-f597b0c632aa)

And then specify a mode(singleFile or singleFolder). I will show first with singleFile.

![Screenshot 2024-07-14 105024](https://github.com/user-attachments/assets/c666f0dd-9252-4310-8ff2-7bdbf59298c2)

After that we specify our port:

![Screenshot 2024-07-14 105149](https://github.com/user-attachments/assets/22aab36a-fee9-45a1-8639-a0f5f5909fd6)

And then we specify our html file(file in the directory where main.js is located) with htmlF:

![Screenshot 2024-07-14 105307](https://github.com/user-attachments/assets/ebe80a7d-17b5-4f20-9140-43c3073c3e77)

And after that we add run(if run is true it will run the code, but if its false it wont idk why i added that):

![Screenshot 2024-07-14 105439](https://github.com/user-attachments/assets/171e7753-d10b-4b32-aee9-5dc2489dcd2b)

And now we just do node main.js.
AND THERE WE GO!:

![Screenshot 2024-07-14 105608](https://github.com/user-attachments/assets/998c5600-f1d4-4bd8-aa1d-9da79c436f5e)

Now if we go to localhost and our port we will see our page(yours will be different):

![image](https://github.com/user-attachments/assets/4c7a03cb-7f96-4830-964c-27e098eef26d)

Now lets show with singleFolder mode.

We start like before but with the mode instead of being singleFile it will be singleFolder:

![image](https://github.com/user-attachments/assets/78e11781-254b-448b-b405-35b57044286e)

And specify our port again:

![image](https://github.com/user-attachments/assets/0cc56e78-8b6a-45d2-9b70-b5097bcf8f38)

Now instead of htmlF we type folder and we can set it to the path of our folder or we can type cFolder which stands for current folder

![image](https://github.com/user-attachments/assets/dbdbe20d-e032-4725-b190-bdc443d77ba6)

And add the stupid run AGAIN:

![image](https://github.com/user-attachments/assets/5eec82cd-a593-4f46-a6ae-28041b54068d)

AND THERE WE GO!:

![image](https://github.com/user-attachments/assets/d6b73a63-e352-4527-9aba-da7a71daa373)

When we go to the link we will see this(yours will have different files):

![image](https://github.com/user-attachments/assets/a1851bd9-43ba-4bfb-8d08-ebac4d0250d2)

And if we click on the file it will redirect us to localhost:(port)/(filename)

AND THATS IT, i maybe add more things in the future. BYEEEEEEE

VERSION: 1.1

Hello again, i updated this thing. 

New things: motion-detector with opencv, browser-window with electron

Lets first show motion detection.

You need python isntalled and cv2 which you can install with pip install opencv-python

NOW LETS GET IN THE NEW THINGS!

First we gotta declare camera like this:

![image](https://github.com/user-attachments/assets/f4e4d210-c5e4-4aea-9eb9-8393a7ba5de2)

And then we add MotionDetection like this:

![image](https://github.com/user-attachments/assets/ff64e4eb-084a-40e7-8f5b-f191c4552746)

Now we add detectionText which is text that will show when there is motion you can just do dT and it will replace it with the default text and add run too:

![image](https://github.com/user-attachments/assets/0d098e46-0a7c-47dc-b4cb-4df34cc07045)

Now we just run main.js and there you go:

![image](https://github.com/user-attachments/assets/edd3fc3a-a221-4e6a-8a45-dc922d92a7a2)

I dont have camera connected rn but you can try it for yourself and press q to exit.

Now lets see how about electron thing.

We type createWindow like this:

![image](https://github.com/user-attachments/assets/2116445c-b00e-4af1-8e00-6c22d6aff203)

Now we add width and height:

![image](https://github.com/user-attachments/assets/fe4b3d9d-45a7-42fd-be71-271bcb86cf48)

After that we add icon:

![image](https://github.com/user-attachments/assets/18e65f8e-4d39-467d-b324-16826f72e183)

And then we add cFile which is the file that electron is gonna load + we add run:

![image](https://github.com/user-attachments/assets/1c996661-c045-4d80-921b-c34deb954d1d)

Oh i forgot we gotta add this inside htmlBasedWindow:

![image](https://github.com/user-attachments/assets/032432f1-aaf7-45c9-a6d8-6f92660169a0)

And we run main.js now and it should open a window like this:

![image](https://github.com/user-attachments/assets/27eb0b77-2053-4078-a3d0-89876b18b2c5)

But yours will be different.

Well thats for this version i may add other things in the future now BYEEEE!

