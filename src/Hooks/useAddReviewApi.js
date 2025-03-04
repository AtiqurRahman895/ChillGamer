import axios from "axios";
import { toast } from "react-toastify";

export const useAddReviewApi = () => {
  const allRev = [
    {
      gameCoverImage: "https://i.ibb.co.com/mS8gP2t/Elden-Ring.jpg",
      gameTitle: "Elden Ring",
      reviewDescription:
        "A masterpiece of open-world RPG gaming with incredible lore, stunning visuals, and challenging combat.",
      rating: 5,
      publishingYear: 2022,
      genres: "RPG",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/T1mZC6p/Hollow-Knight.jpg",
      gameTitle: "Hollow Knight",
      reviewDescription:
        "A beautifully crafted Metroidvania with challenging gameplay, mesmerizing music, and an engaging story.",
      rating: 4.1,
      publishingYear: 2017,
      genres: "Adventure",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/rHffp5z/Cyberpunk.jpg",
      gameTitle: "Cyberpunk 2077",
      reviewDescription:
        "Despite its rocky launch, Cyberpunk 2077 delivers an expansive story and immersive world-building.",
      rating: 3.1,
      publishingYear: 2020,
      genres: "Action",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/h80j2VC/Stardew-Valley.jpg",
      gameTitle: "Stardew Valley",
      reviewDescription:
        "A relaxing farming simulator with a perfect mix of resource management, relationships, and exploration.",
      rating: 4.2,
      publishingYear: 2016,
      genres: "Simulation",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/LP8xDF0/The-Witcher.jpg",
      gameTitle: "The Witcher 3: Wild Hunt",
      reviewDescription:
        "One of the best RPGs ever made, with an exceptional narrative, immersive world, and unforgettable characters.",
      rating: 5,
      publishingYear: 2015,
      genres: "RPG",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/HCs85Pn/Fortnite.jpg",
      gameTitle: "Fortnite",
      reviewDescription:
        "A fun and engaging battle royale with creative building mechanics and regular updates.",
      rating: 3.2,
      publishingYear: 2017,
      genres: "Battle Royale",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/Dfqcp2p/Minecraft.jpg",
      gameTitle: "Minecraft",
      reviewDescription:
        "A sandbox game that fosters creativity and adventure, suitable for players of all ages.",
      rating: 4.4,
      publishingYear: 2011,
      genres: "Sandbox",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/93jcLVD/Apex-Legends.jpg",
      gameTitle: "Apex Legends",
      reviewDescription:
        "A fast-paced battle royale with smooth gameplay and unique character abilities.",
      rating: 3.3,
      publishingYear: 2019,
      genres: "Battle Royale",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/VNKsV79/God-of-War.jpg",
      gameTitle: "God of War",
      reviewDescription:
        "An action-packed adventure with a deeply emotional story and breathtaking visuals.",
      rating: 5,
      publishingYear: 2018,
      genres: "Action",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/09Bhpvy/Among-Us-banner.jpg",
      gameTitle: "Among Us",
      reviewDescription:
        "A fun and addictive multiplayer game where deception and strategy are key.",
      rating: 3.9,
      publishingYear: 2018,
      genres: "Party",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/tZdsGH7/League-of-Legends.jpg",
      gameTitle: "League of Legends",
      reviewDescription:
        "A highly competitive MOBA with a steep learning curve and rewarding gameplay.",
      rating: 3.5,
      publishingYear: 2009,
      genres: "MOBA",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/XVz4sHB/Zelda.jpg",
      gameTitle: "The Legend of Zelda: Breath of the Wild",
      reviewDescription:
        "A groundbreaking open-world adventure with unparalleled freedom and creativity.",
      rating: 4.4,
      publishingYear: 2017,
      genres: "Adventure",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/7XWzbdD/Redemption.jpg",
      gameTitle: "Red Dead Redemption 2",
      reviewDescription:
        "A cinematic masterpiece that immerses players in the Old West like never before.",
      rating: 4.9,
      publishingYear: 2018,
      genres: "Action",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/DDLJQ5x/Overwatch.jpg",
      gameTitle: "Overwatch",
      reviewDescription:
        "A vibrant team-based shooter with unique characters and dynamic gameplay.",
      rating: 3.6,
      publishingYear: 2016,
      genres: "Shooter",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/G3MWSs1/Dark-Souls.jpg",
      gameTitle: "Dark Souls III",
      reviewDescription:
        "A challenging action RPG with dark, atmospheric world design and intense combat.",
      rating: 5,
      publishingYear: 2016,
      genres: "RPG",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/BCCN2yD/Fall-Guys.jpg",
      gameTitle: "Fall Guys: Ultimate Knockout",
      reviewDescription:
        "A delightful and chaotic multiplayer party game that's perfect for casual fun.",
      rating: 4.6,
      publishingYear: 2020,
      genres: "Party",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/55rC4RY/Genshin-Impact.jpg",
      gameTitle: "Genshin Impact",
      reviewDescription:
        "A stunning open-world RPG with a captivating story and gacha mechanics.",
      rating: 3.7,
      publishingYear: 2020,
      genres: "RPG",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/y8JYT9r/Call-of-Duty.jpg",
      gameTitle: "Call of Duty: Warzone",
      reviewDescription:
        "A polished and intense battle royale experience with great gunplay.",
      rating: 3.4,
      publishingYear: 2020,
      genres: "Shooter",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/VSY2hPB/Animal-Crossing.jpg",
      gameTitle: "Animal Crossing: New Horizons",
      reviewDescription:
        "A charming life-simulation game that's perfect for relaxing and unwinding.",
      rating: 4.8,
      publishingYear: 2020,
      genres: "Simulation",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
    {
      gameCoverImage: "https://i.ibb.co.com/Vjwmcjj/Monster-Hunter.jpg",
      gameTitle: "Monster Hunter: World",
      reviewDescription:
        "An epic action RPG with thrilling monster battles and deep customization.",
      rating: 5,
      publishingYear: 2018,
      genres: "Action",
      userEmail: "atiqemon98@gmail.com",
      userName: "Atiqur Rahman",
    },
  ];

  const addReviews = () => {
    let index = 0;
    setInterval(() => {
      if (index == 127) {
        return;
      }
      let {
        gameCoverImage,
        gameTitle,
        reviewDescription,
        rating,
        publishingYear,
        genres,
        userEmail,
        userName,
      } = allRev[index];
      addReviewOnSubmit(
        gameCoverImage,
        gameTitle,
        reviewDescription,
        rating,
        publishingYear,
        genres,
        userEmail,
        userName
      );
      console.log(index);
      index++;
    }, 2000);
  };

  let addReviewOnSubmit = (
    gameCoverImage,
    gameTitle,
    reviewDescription,
    rating,
    publishingYear,
    genres,
    userEmail,
    userName
  ) => {
    const reviewCredentials = {
      gameCoverImage,
      gameTitle,
      reviewDescription,
      rating,
      publishingYear,
      genres,
      userEmail,
      userName,
    };
    axios
      .post(
        "https://chill-gamer-server-sepia.vercel.app/addReview",
        reviewCredentials
      )
      .then(() => {
        const gameCredentials = { gameTitle };
        axios.put(
          "https://chill-gamer-server-sepia.vercel.app/addOrUpdateGame",
          gameCredentials
        );
      })
      .catch((error) => {
        console.error("Error adding Review:", error);
        toast.error("Failed to add Review!");
      });
  };

  return addReviews;
};
