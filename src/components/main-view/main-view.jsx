import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
        _id: ObjectId('6561f7965e59451f55b4f73b'),
        Title: 'Inception',
        Description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
        Genre: {
          Name: 'Action',
          Description: 'Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats.'
        },
        Director: {
          Name: 'Christopher Nolan',
          Bio: 'Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.',
          Birth: '1970-06-30'
        }
      },
      {
        _id: ObjectId('6561f7b15e59451f55b4f73c'),
        Title: 'Under The Shadow',
        Description: 'As a mother and daughter struggle to cope with the terrors of the post-revolution, war-torn Tehran of the 1980s, a mysterious evil begins to haunt their home.',
        Genre: {
          Name: 'Horror',
          Description: 'Horror films may incorporate incidents of physical violence and psychological terror; they may be studies of deformed, disturbed, psychotic, or evil characters; stories of terrifying monsters or malevolent animals; or mystery thrillers that use atmosphere to build suspense.'
        },
        Director: {
          Name: 'Babak Anvari',
          Bio: "Babak Anvari is a British-Iranian filmmaker. He is best known for directing horror films such as Under the Shadow (2016) and Wounds (2019). Personal life In 2022, Anvari participated in the Sight & Sound film polls of that year. It is held every ten years to select the greatest films of all time, by asking contemporary directors to select ten films of their choice. Anvari's selections were Close Encounters of the Third Kind, Batman Returns, Jurassic Park, Stalker, 2001: A Space Odyssey, Mulholland Dr., Beetle Juice, The Dark Knight, Heat and Se7en.",
          Birth: '1982'
        }
      },
      {
        _id: ObjectId('6561f7ca5e59451f55b4f73d'),
        Title: 'Carol',
        Description: 'Carol is a 2015 romantic period drama film directed by Todd Haynes. The screenplay by Phyllis Nagy is based on the 1952 romance novel The Price of Salt by Patricia Highsmith (republished as Carol in 1990). The film stars Cate Blanchett, Rooney Mara, Sarah Paulson, Jake Lacy, and Kyle Chandler. Set in New York City during the early 1950s, Carol tells the story of a forbidden affair between an aspiring female photographer and an older woman going through a difficult divorce.',
        Genre: {
          Name: 'Romance',
          Description: 'Romance films involve romantic love stories recorded in visual media for broadcast in theatres or on television that focus on passion, emotion, and the affectionate romantic involvement of the main characters.'
        },
        Director: {
          Name: 'Todd Haynes',
          Bio: 'Todd Haynes is an American film director, screenwriter, and producer. His films span four decades with themes examining the personalities of well-known musicians, dysfunctional and dystopian societies, and blurred gender roles.',
          Birth: '1961-02-02'
        }
      },
      {
        _id: ObjectId('6561f7e35e59451f55b4f73e'),
        Title: 'The Ritual',
        Description: 'The Ritual is a 2017 British horror film that follows four friends who take a hiking trip into a Swedish forest and encounter an ancient evil. The film is directed by David Bruckner and written by Joe Barton, who adapted the 2011 novel The Ritual by Adam Nevill. The film stars Rafe Spall, Arsher Ali, Robert James-Collier, and Sam Troughton.',
        Genre: {
          Name: 'Horror',
          Description: 'Horror is a film genre that seeks to elicit fear or disgust in its audience for entertainment purposes. Horror films often explore dark subject matter and may deal with transgressive topics or themes. Broad elements include monsters, apocalyptic events, and religious or folk beliefs.'
        },
        Director: {
          Name: 'David Brucker',
          Bio: "David Bruckner is an American film director. With Jacob Gentry and Dan Bush, he co-wrote and co-directed the 2007 horror film The Signal. Bruckner also co-wrote and directed the 'Amateur Night' segment of the 2012 horror anthology film V/H/S, as well as directed the 2017 film The Ritual and the 2020 film The Night House.",
          Birth: '1977'
        }
      },
      {
        _id: ObjectId('6561f7f75e59451f55b4f73f'),
        Title: 'The Platform',
        Description: "The Platform (Spanish: El hoyo, transl. The Hole) is a 2019 Spanish social science fiction horror film directed by Galder Gaztelu-Urrutia.[2] The film is set in a large, tower-style 'Vertical Self-Management Center.' Its residents, who are switched every month between its many floors, are fed via a platform which, initially filled with food at the top floor, gradually descends through the towers levels, stopping for a fixed amount of time on each. The system inevitably leads to conflict, as the residents at the top levels get to eat as much as they can, with each level only getting the leftovers from the previous ones.",
        Genre: {
          Name: 'Social science fiction',
          Description: "Social science fiction is a subgenre of science fiction, usually (but not necessarily) soft science fiction, concerned less with technology/space opera and more with speculation about society. In other words, it 'absorbs and discusses anthropology' and speculates about human behavior and interactions."
        },
        Director: {
          Name: 'Galder Gaztelu-Urrutia',
          Bio: 'Galder Gaztelu-Urrutia is a Spanish film and advertising director and producer. He made his feature-film debut with, The Platform (2019), a dystopian science fiction-horror film.',
          Birth: '1974-02-14'
        }
      },
      {
        _id: ObjectId('6561f80c5e59451f55b4f740'),
        Title: 'The Family Stone',
        Description: 'American comedy-drama film written and directed by Thomas Bezucha. Produced by Michael London and distributed by 20th Century Fox, it stars an ensemble cast, including Diane Keaton, Craig T. Nelson, Dermot Mulroney, Sarah Jessica Parker, Luke Wilson, Claire Danes, Rachel McAdams, and Tyrone Giordano. The plot follows the Christmas holiday misadventures of the Stone family in a small New England town when the eldest son, played by Mulroney, brings his uptight girlfriend (played by Parker) home with the intention of proposing to her with a cherished heirloom ring. Overwhelmed by the hostile reception, she begs her sister to join her for emotional support, which triggers further complications.',
        Genre: {
          Name: 'Comedy drama',
          Description: 'Comedy drama, also known as the portmanteau dramedy, is a genre of dramatic works that combines elements of comedy and drama. The modern, scripted television examples tend to have more humorous bits than simple comic relief seen in a typical hour-long legal or medical drama but exhibit far fewer jokes per minute as in a typical half-hour sitcom.'
        },
        Director: {
          Name: 'Thomas Bezucha',
          Bio: 'Bezucha was born and raised in Amherst, Massachusetts, and graduated from Amherst Regional High School in 1982. Bezucha graduated in fashion design from the Parsons School of Design, and worked as a creative services executive for Polo Ralph Lauren and Coach. He wrote and directed the films Big Eden (2000), The Family Stone (2005), Monte Carlo (2011), and Let Him Go (2020). He also co-wrote the films The Guernsey Literary and Potato Peel Pie Society (2018) and The Good House (2021). Bezucha is openly gay.',
          Birth: '1964-03-08'
        }
      },
      {
        _id: ObjectId('6561f81e5e59451f55b4f741'),
        Title: 'Titanic',
        Description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious ill-fated R.M.S. Titanic.',
        Genre: {
          Name: 'Romance',
          Description: 'Romance films involve romantic love stories recorded in visual media for broadcast in theatres or on television that focus on passion, emotion, and the affectionate romantic involvement of the main characters.'
        },
        Director: {
          Name: 'James Cameron',
          Bio: "James Francis Cameron CC is a Canadian filmmaker. A major figure in the post-New Hollywood era Cameron is considered one of the industry's most innovative filmmakers regularly making use of novel technologies with a classical filmmaking style.",
          Birth: '1954-08-16'
        }
      },
      {
        _id: ObjectId('6561f8305e59451f55b4f742'),
        Title: 'Avatar',
        Description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
        Genre: {
          Name: 'Sci-Fi',
          Description: 'Usually futuristic, science fiction speculates about alternative ways of life made possible by technological change, and hence has sometimes been called speculative fiction.'
        },
        Director: {
          Name: 'James Cameron',
          Bio: "James Francis Cameron CC is a Canadian filmmaker. A major figure in the post-New Hollywood era Cameron is considered one of the industry's most innovative filmmakers regularly making use of novel technologies with a classical filmmaking style.",
          Birth: '1954-08-16'
        }
      },
      {
        _id: ObjectId('6561f8465e59451f55b4f743'),
        Title: 'The Creator',
        Description: 'Against the backdrop of a war between humans and robots with artificial intelligence, a former soldier finds the secret weapon, a robot in the form of a young child.',
        Genre: {
          Name: 'Sci-Fi',
          Description: 'Usually futuristic, science fiction speculates about alternative ways of life made possible by technological change, and hence has sometimes been called speculative fiction.'
        },
        Director: {
          Name: 'Gareth Edwards',
          Bio: 'Gareth James Edwards was born in the English town of Nuneaton Warwickshire. Growing up he admired movies such as the 1977 classic Star Wars and went on to pursue a film career. He even cites George Lucas and Steven Spielberg as his biggest influences. Edwards studied BA (Hons) Film & Video at the University for the Creative Arts in Farnham (formerly the Surrey Institute of Art & Design) graduating in 1996. In 2012 he received an honorary Master of Arts from UCA.',
          Birth: '1975-06-01'
        }
      },
      {
        _id: ObjectId('6561f8565e59451f55b4f744'),
        Title: 'Tenet',
        Description: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real-time.',
        Genre: {
          Name: 'Action',
          Description: 'Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats.'
        },
        Director: {
          Name: 'Christopher Nolan',
          Bio: 'Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.',
          Birth: '1970-07-30'
        }
      }
    ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
