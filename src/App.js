import React, { useState } from "react";
import "./App.css";

function FullTextArticle(props) {
  const { title, sourceImage, theme } = props;
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="content-preview-card"
      style={{ backgroundImage: `url(${sourceImage})` }}
    >
      <h2
        className={
          theme === "white"
            ? "lg-dynamic-header-white"
            : "lg-dynamic-header-black"
        }
      >
        {title}
      </h2>
      {isShown && (
        <div
          onClick={() => window.open("/", "_self")}
          className="description-overlay"
        >
          <div className="avatar-overlay" />
          <p className="read-count">100 Reads</p>
          <div className="overlay-content">
            <h3 className="md-static-header-black">
              Messenger bag you probably haven't heard of.
            </h3>
            <p className="md-dynamic-description-content-white">
              Tote bag quinoa jianbing mixtape. Stumptown bushwickvexillologist
              la croix, umami paleo lumbersexual locavore intelligentsia pug
              disrupt artisan meh tacos.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function SemiTextArticle(props) {
  const { title, sourceImage, theme } = props;
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="content-preview-card"
      style={{ backgroundImage: `url(${sourceImage})` }}
    >
      <h2
        className={
          theme === "white"
            ? "md-dynamic-header-white"
            : "md-dynamic-header-black"
        }
      >
        {title}
      </h2>
      {isShown && (
        <div
          onClick={() => window.open("/", "_self")}
          className="description-overlay"
        >
          <div className="avatar-overlay" />
          <p className="read-count">100 Reads</p>
          <div className="overlay-content">
            <h3 className="md-static-header-black">
              Messenger bag you probably haven't heard of.
            </h3>
            <p className="md-dynamic-description-content-white">
              Tote bag quinoa jianbing mixtape. Stumptown bushwickvexillologist
              la croix, umami paleo lumbersexual locavore intelligentsia pug
              disrupt artisan meh tacos.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1 className="xlg-static-header-black">The Independent</h1>
      <p className="lg-static-content-text">
        I'm baby kombucha banh mi quinoa, bespoke paleo migas gentrify narwhal
        scenester art party humblebrag retro sriracha. Man braid yr master
        cleanse retro etsy, sartorial man bun cloud bread copper mug everyday
        carry hashtag. Lomo photo booth cronut portland pitchfork bitters.
        Drinking vinegar tote bag air plant succulents snackwave.
      </p>
      <div className="lg-static-link-container">
        <a href="/" className="lg-static-link lg-static-link-active">
          News
        </a>
        <a href="/" className="lg-static-link">
          Sports
        </a>
        <a href="/" className="lg-static-link">
          Local
        </a>
        <a href="/" className="lg-static-link">
          Cultural
        </a>
        <a href="/" className="lg-static-link">
          STEM
        </a>
        <a href="/" className="lg-static-link">
          Art
        </a>
        <a href="/" className="lg-static-link">
          Editorials
        </a>
        <a href="/" className="lg-static-link">
          Community
        </a>
      </div>
      <div className="content-feed-container">
        <SemiTextArticle
          theme="black"
          title="Messenger bag you probably haven't heard of."
          sourceImage="https://images.unsplash.com/photo-1585458297824-076478fda40f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        />
        <FullTextArticle
          theme="white"
          title="Messenger bag you probably haven't heard of."
          sourceImage="https://images.unsplash.com/photo-1584092067256-a2e3617f709b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2245&q=80"
        />
        <FullTextArticle
          theme="black"
          title="Messenger bag you probably haven't heard of."
          sourceImage="https://images.unsplash.com/photo-1585893656971-d3d932cada08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        />

        <SemiTextArticle
          theme="white"
          title="Messenger bag you probably haven't heard of."
          sourceImage="https://images.unsplash.com/photo-1586810163991-513cd3dec586?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"
        />
      </div>
    </div>
  );
}

export default App;
