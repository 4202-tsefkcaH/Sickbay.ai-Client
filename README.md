# 4202-tsefckaH

## Problem Statement
1. **Medical Personnel** Shortage: Across the vast rural landscape of India, millions are left with critical shortage of medical personnel. This lack of readily available healthcare professionals leaves residents feeling isolated and vulnerable. The above has been made pretty clear by various reports. This is visible in this [article](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(15)01231-3/fulltext#:~:text=In%20community%20health%20centres%2C%20the,of%20high%20rates%20of%20absenteeism.).
2. **Coded Medical Reports**: A significant challenge arise when deciphering complex medical reports. These reports, often filed with technical jargon, become a coded message for the people leading to confusion and anxiety.
3. **Preventive Care Gap**: Difficulty understanding health status creates a barrier to prioritizing preventive care measures in rural communities.

![download](https://github.com/4202-tsefkcaH/Sickbay.ai-Client/assets/118868981/19b095f0-4e0b-441b-95b4-0dae0d005eea)

## Approach
1. **Demystifying Complex Reports**: OCR technology extracts key information from uploaded reports, enabling AI analysis and clear explanations of potential health risks.
2. **Empowering Informed Decisions**: The AI chatbot simplifies complex medical jargon through interactive conversation, fostering user undertanding.
3. **Bridging the Gap with Guidance**: Accessible 24/7, this web application can help users understand their health status without any delay in medical attention.

## Technical View
1. **Full Stack Web Application**: Complete full-stack application with a React.js front-end along with an Express server primarily for User Authentication(JWT).
2. **Machine Learning Integration**: We will utilize Flask for integrating the Machine Learning models with the Front-End.
3. **Optical Character Recognition**: Integrate OCR pipeline to extract text from a given document.
4. **Large Language Model**: Deploying a clinical LLM to supervise medical decisions.

## Technology Stack
For **web** application:
- Next.js
- Node.js
- Express.js
- Flask
- MongoDB

For **Machine Learning**:
- LangChain
- Hugging Face
- Pytorch
- Tesseract

## Basic Workflow
1. **Breaking down Reports**
   - Applying Optical Character Recognition(OCR) to extract text from the document.
   - Passing that text as context to a Large Language Model which is fine tuned using SFT(Supervised Fine Tuning) on bio-medical datasets to generate the probable condition       and respective suggestions for the user.
   - Saving the reports and the condition for maintaining medical history.
2. **Chatting with the LLM**
   - The Large Language Model(LLM) can be used separately to advise the user on any doubts the user may have.
   - The chats are stored in the database as sessions for future reference.
3. **Detailed Medical History**
   - Complete data along with reports will be stored in the database in order to maintain the medical history of the user.
4. **JWT Authentication**
   - Complete jsonwebtoken(JWT) authentication to provide a safe and secure experience for the user.

## User Interface


![Screenshot 2024-05-11 053812](https://github.com/4202-tsefkcaH/Sickbay.ai-Client/assets/118868981/ecccc7e9-9426-46c0-a9f1-f0856cabb626)
![Screenshot 2024-05-11 054012](https://github.com/4202-tsefkcaH/Sickbay.ai-Client/assets/118868981/3d8d4946-41da-4bca-87bd-0da5d2efc304)
![Screenshot 2024-05-11 054033](https://github.com/4202-tsefkcaH/Sickbay.ai-Client/assets/118868981/5e334502-dea3-435d-95a1-bc0e536cfffc)

