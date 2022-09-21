import './App.css';
import './components/BookCard.css';
import { useState } from 'react';
import BookCard from './components/BookCard';

function App() {

  const DarkFiction = [
    {
      name: "1984",
      rating: "4.19"
    },
    {
      name: "Dracula",
      rating: "4.01"
    },
    {
      name: "American Gods",
      rating: "4.11"
    },
    {
      name: "Fahrenheit 451",
      rating: "3.98"
    },
    {
      name: "Frankenstein",
      rating: "3.84"
    },
    {
      name: "A Clockwork Orange",
      rating: "4.00"
    },
    {
      name: "The Complete Stories and Poems",
      rating: "4.38"
    },
    {
      name: "The Picture of Dorian Gray",
      rating: "4.11"
    },
    {
      name: "The Road",
      rating: "3.98"
    },
    {
      name: "Lord of the Flies",
      rating: "3.69"
    }
  ];

  const ActionAdventure = [
    {
      name: "Jurassic Park",
      rating: "4.07"
    },
    {
      name: "The Hobbit",
      rating: "4.28"
    },
    {
      name: "The Hunger Games",
      rating: "4.32"
    },
    {
      name: "The Fellowship of the Ring",
      rating: "4.38"
    },
    {
      name: "The Da Vinci Code",
      rating: "3.89"
    },
    {
      name: "The Girl with the Dragon Tattoo",
      rating: "4.16"
    },
    {
      name: "The Bourne Identity",
      rating: "4.04"
    },
    {
      name: "The Hunt for Red October",
      rating: "4.09"
    },
    {
      name: "The Count of Monte Cristo",
      rating: "4.28"
    },
    {
      name: "The Return of the King",
      rating: "4.55"
    }
  ];

  const TimeTravel = [
    {
      name: "The Time Traveler's Wife",
      rating: "3.99"
    },
    {
      name: "11/22/63",
      rating: "4.32"
    },
    {
      name: "Outlander",
      rating: "4.25"
    },
    {
      name: "The Time Machine",
      rating: "3.90"
    },
    {
      name: "Replay",
      rating: "4.14"
    },
    {
      name: "Doomsday Book",
      rating: "4.03"
    },
    {
      name: "A Wrinkle in Time",
      rating: "3.99"
    },
    {
      name: "Time and Again",
      rating: "3.95"
    },
    {
      name: "Slaughterhouse-Five",
      rating: "4.09"
    },
    {
      name: "Timeline",
      rating: "3.86"
    }
  ];

  const MysterieThriller = [
    {
      name: "One Flew Over the Cuckoo's Nest",
      rating: "4.2"
    },
    {
      name: "Death Leaves a Shadow",
      rating: "4.34"
    },
    {
      name: "The Zombie Room",
      rating: "4.07"
    },
    {
      name: "The Elephant Tree",
      rating: "4.05"
    },
    {
      name: "Invisible Monsters",
      rating: "3.99"
    },
    {
      name: "Fight Club",
      rating: "4.19"
    },
    {
      name: "American Psycho",
      rating: "3.81"
    },
    {
      name: "A Clockwork Orange",
      rating: "4"
    },
    {
      name: "The Wasp Factory",
      rating: "3.79"
    },
    {
      name: "Lunar Park",
      rating: "3.62"
    }
  ];

  const [genre, setGenre] = useState(DarkFiction);


  return (
    <div className='mainContainer'>
    <h1>Books Recommendation App</h1>
      <div className='buttonContainer'>
      <button
        onClick={() => {
          setGenre(DarkFiction);
        }}
      >
        Dark Fiction
      </button>
      <button
        onClick={() => {
          setGenre(ActionAdventure);
        }}
      >
        Action-Adventure
      </button>
      <button
        onClick={() => {
          setGenre(TimeTravel);
        }}
      >
        Time Travel
      </button>
      <button
        onClick={() => {
          setGenre(MysterieThriller);
        }}
      >
        Mysterie-Thriller
      </button>
      </div>

      <ol>
        {genre.map((book) => {
          return <BookCard data={book} />;
        })}
      </ol>
    </div>
  );
}

export default App;
