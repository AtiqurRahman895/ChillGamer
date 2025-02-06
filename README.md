# ChillGamer

A dynamic gaming platform where users can explore, review, and add their favorite games. Enjoy a seamless gaming experience with a sleek UI and interactive features.

![ChillGamer Screenshot](https://i.ibb.co.com/3mgxmjw4/project-Image2.jpg) 

## 🚀 Live Project  
🔗 [ChillGamer Live](https://chillGamer.surge.sh/)  

---

## 📌 Technologies Used  
- **Frontend**: React, React Router DOM, Styled Components, Tailwind CSS, DaisyUI, Firebase for Authentication 
- **Backend**: Node.js, Express.js, MongoDB Atlas, Axios (for API calls)  
- **Hosting:** Client hosted on Surge, Server hosted on Vercel  
- **State Management & Utilities**: React Helmet Async, React Copy to Clipboard  
- **Animations & UI Enhancements**: React Awesome Reveal, React Fast Marquee, React Simple Typewriter, AOS  
- **Game & Review Management**: React Slick, React Stars  
- **Notifications & Alerts**: React Toastify  

---

## 🌟 Core Features  
✅ Browse and review games  
✅ Add, update, and delete game reviews  
✅ Wishlist feature to save favorite games  
✅ Interactive animations for enhanced UI experience  
✅ Responsive design using Tailwind CSS and DaisyUI  
✅ Secure user authentication with Firebase  
✅ Copy-to-clipboard functionality for game details  

---

## 📦 Dependencies  
Refer to [`package.json`](package.json) for a complete list of dependencies. Some key dependencies include:  
- **React & React DOM** (`^18.3.1`)  
- **React Router DOM** (`^6.27.0`)  
- **Firebase** (`^11.0.2`)  
- **Axios** (`^1.7.8`)  
- **React Slick & Slick Carousel** (`^0.30.2`, `^1.8.1`)  
- **React Toastify** (`^10.0.6`)  
- **AOS (Animations)** (`^2.3.4`)  
- **React Fast Marquee** (`^1.6.5`)  

---

## 🛠️ Installation & Setup  

Follow these steps to run the project locally:  

### Prerequisites  
- Install [Node.js](https://nodejs.org/) (latest LTS version recommended)  
- Install [Git](https://git-scm.com/)  

### Steps  

1. **Clone the repository**  
   ```sh
   git clone https://github.com/your-username/chillgamer.git
   cd chillgamer
   ```

2. **Install dependencies**  
   ```sh
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env.local` file in the root directory and add the following variables:  
   ```sh
   VITE_apiKey=your_firebase_api_key
   VITE_authDomain=your_firebase_auth_domain
   VITE_projectId=your_firebase_project_id
   VITE_storageBucket=your_firebase_storage_bucket
   VITE_messagingSenderId=your_firebase_messaging_sender_id
   VITE_appId=your_firebase_app_id
   VITE_cloudinary_cloud_name=your_cloudinary_cloud_name
   ```

4. **Start the development server**  
   ```sh
   npm run dev
   ```

5. **Open the project in your browser**  
   ```
   http://localhost:5173
   ```

---

## 🔄 Project Routes  

| Route                | Access  | Description                     |
|----------------------|---------|---------------------------------|
| `/`                 | Public  | Home page                        |
| `/reviews`          | Public  | View all reviews                 |
| `/games`            | Public  | Browse all games                 |
| `/review/:_id`      | Public  | View single review details       |
| `/game/:_id`        | Public  | View game details                |
| `/addReview`        | Private | Add a new review                 |
| `/addReviewOn/:_id` | Private | Add a review to an existing game |
| `/myReviews`        | Private | View user-created reviews        |
| `/updateReview/:_id`| Private | Update an existing review        |
| `/wishlist`         | Private | View saved games                 |
| `/login`           | Public  | User login                       |
| `/register`        | Public  | User registration                |
| `/change-password`  | Private | Change account password          |
| `/forgot-password`  | Public  | Reset password request           |

---

## 🌍 Relevant Resources  
🔗 [Live Project](https://chillGamer.surge.sh/)  
📖 [Vite Documentation](https://vitejs.dev/)  
📖 [React Router Docs](https://reactrouter.com/)  
📖 [Firebase Docs](https://firebase.google.com/docs)  

---

## 📜 License  
This project is licensed under the **MIT License**.  

🙌 Feel free to contribute and improve the project! 🚀
