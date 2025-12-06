Qr_Generator:

Description

Qr_Generator is a simple web application that uses a QR-generator API to let users generate QR codes from input data directly in the browser. You enter the data (text, URL, etc.), and it returns a QR code image that you can download or share.

Tech Stacks / Tools Used

reactJs – front-end logic for calling the QR-code generation API and handling responses.

(If using build tooling): Vite — because I saw vite.config.js in the repo.

(Optional) Node / npm — for managing dependencies (see package.json).

Getting Started
Prerequisites

  Node.js and npm installed (if you want to use the build setup).
  
  A modern web browser (for running the app).

Steps to Get the Project Locally / Clone & Setup

    Clone the repository
    
    git clone https://github.com/Balaraman-dev/Qr_Generator.git
    
    
    Navigate into the project directory
    
    > cd Qr_Generator
    
    Install dependencies
    
    > npm install
    
    Run the development server
    
    > npm run dev


Open the app

After running dev, open your browser and go to the local host URL (usually something like http://localhost:5173/ or what Vite shows in console).

Use the UI to enter text/URL, generate QR code, and download or view.
