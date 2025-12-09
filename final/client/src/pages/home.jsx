import React, { useEffect } from "react";
import MicroModal from "micromodal";

export default function Home() {
  useEffect(() => {
    MicroModal.init({
      disableScroll: true,
      awaitOpenAnimation: false,
      awaitCloseAnimation: false
    });
  }, []);

  return (
    <>
      <div className="page">
        <h1>The Reading Tracker!</h1>

        <p>
          Welcome! As the biggest reader I know, I can imagine the difficulty
          of keeping track of all the greats and the not-so-greats alike.
          Here, you can keep track of all the books you have read, loved,
          hated, and shared! Enjoy!
        </p>

        <button onClick={() => MicroModal.show("home-modal")}>
          How does this work?
        </button>
      </div>

      <div
        className="modal micromodal-slide"
        id="home-modal"
        aria-hidden="true"
      >
        <div
          className="modal__overlay"
          tabIndex="-1"
          data-micromodal-close
        >
          <div className="modal__container" role="dialog" aria-modal="true">
            <button
              className="modal__close"
              aria-label="Close modal"
              data-micromodal-close
            >
              ✕
            </button>

            <p>
              The links at the top of the page will take you to either add a new
              book or view all the books you've added so far. To add a book, just
              fill out the form with the book's title, author, rating, approximately 
              when you read it, and any other notes you want to include. Once you submit the
              form, your book will be added to the database and you can view it on
              the "View Books" page. Happy reading!!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
