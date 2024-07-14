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
