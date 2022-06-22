import React from "react";
import { Link } from 'react-router-dom';


const Images = () => {
  return (
    <div className="container">
      <div className="header">
        <Link to="/">
          <img
            src={require("../images/AllenBeenelogo.png")}
            alt="Enjoy viewing "
            id="aboutPic"
            style={{
              backgroundColor: "#6f7d94",
              display: "block",
              width: "180px",
              height: "90px",
            }}
          />
        </Link>
      </div>

      <div className="sidebar1">
        <ul className="nav">
          <li>
          <Link to="/"> Home </Link>
          </li>
          <li>
          <Link to="/about"> About Me </Link>
          </li>
          <li>
          <Link to="/donate"> How to Donate </Link>
          </li>
          <li>
          <Link to="/images"> Images  </Link>
          </li>
          <li>
          <Link to="/events"> Upcoming Events </Link>
          </li>
        </ul>

        <div className="imgAnimator">
          <img
            src={require("../images/AllenBeenelogo.png")}
            alt="God Bless"
            id="aboutsliderI"
            style={{
              backgroundColor: "#6f7d94",
              display: "block",
              width: "178px",
              height: "170px",
            }}
          />
        </div>

        <p>
          {" "}
          Hello I would like to welcome you to My Graphic / Fine arts website
          please feel free to click on each tap to view each page. If in fact
          you would to place a order to get something created please feel free
          to fill out our contact form leave a commit an well get back to you
          ASAP. Thanks.
        </p>
        </div>

        <div className="content">
          <h1>Instructions</h1>
          <p>
            Be aware that the CSS for these layouts is heavily commented. If you
            do most of your work in Design view, have a peek at the code to get
            tips on working with the CSS for the fixed layouts. You can remove
            these comments before you launch your site. To learn more about the
            techniques used in these CSS Layouts, read this article at Adobe's
            Developer Center -{" "}
            <a href="http://www.adobe.com/go/adc_css_layouts">
              http://www.adobe.com/go/adc_css_layouts
            </a>
            .
          </p>
          <h2>Clearing Method</h2>
          <p>
            Because all the columns are floated, this layout uses a clear:both
            declaration in the .footer rule. This clearing technique forces the
            .container to understand where the columns end in order to show any
            borders or background colors you place on the .container. If your
            design requires you to remove the .footer from the .container,
            you'll need to use a different clearing method. The most reliable
            will be to add a &lt;br className=&quot;clearfloat&quot; /&gt; or
            &lt;div className=&quot;clearfloat&quot;&gt;&lt;/div&gt; after your
            final floated column (but before the .container closes). This will
            have the same clearing effect.
          </p>
          <h3>Logo Replacement</h3>
          <p>
            An image placeholder was used in this layout in the .header where
            you'll likely want to place a logo. It is recommended that you
            remove the placeholder and replace it with your own linked logo.{" "}
          </p>
          <p>
            {" "}
            Be aware that if you use the Property inspector to navigate to your
            logo image using the SRC field (instead of removing and replacing
            the placeholder), you should remove the inline background and
            display properties. These inline styles are only used to make the
            logo placeholder show up in browsers for demonstration purposes.{" "}
          </p>
          <p>
            To remove the inline styles, make sure your CSS Styles panel is set
            to Current. Select the image, and in the Properties pane of the CSS
            Styles panel, right click and delete the display and background
            properties. (Of course, you can always go directly into the code and
            delete the inline styles from the image or placeholder there.)
          </p>
          <h4>Backgrounds</h4>
          <p>
            By nature, the background color on any div will only show for the
            length of the content. This means if you're using a background color
            or border to create the look of a side column, it won't extend all
            the way to the footer but will stop when the content ends. If the
            .content div will always contain more content, you can place a
            border on the .content div to divide it from the column.
          </p>
        </div>

        <div className="footer">
          <p>This website was made by Allen K. Beene </p>
        </div>

      </div>
    
  );
};

export default Images;
