
interface PhotoWithTextProps {
    imageUrl: string;
    caption: string;
    description: string;
    className?: string;
  }
  
  const PhotoWithText: React.FC<PhotoWithTextProps> = ({ imageUrl, caption, description, className }) => {
    return (
      <div className={`photo-with-text ${className}`}>
        <div className="photo">
          <Image src={imageUrl} alt="Photo" width={200} height={250} />
        </div>
        <div className="text">
          <p className="caption">{caption}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    );
  };

  

  <div className="app">
  <h1>Our Leaders</h1>
  <div className="photo-container">
    <div className="photo-unit">
      <PhotoWithText
        imageUrl="/images/1.jpeg"
        caption="Mr. Eddie Lau"
        description="Co-Chief Executive Officer"
      />
    </div>
    
    <div className="photo-unit">
      <PhotoWithText
        imageUrl="/images/2.jpeg"
        caption="Mr. Peter Woo"
        description="Co-Chief Executive Officer"
      />
    </div>
  </div>

</div>

<style jsx>{`
.Leaders{
color:white;
font-size: 24px; // Adjust the font size as needed
font-weight: bold;
margin-bottom: 20px;
}
.app {
color: white;
display: flex;
flex-direction: column;
align-items: center;
margin-left:-30%;
}

.photo-container {
display: flex;
justify-content: center;
}

.photo-unit {
margin: 20px; /* Adjust the margin value as needed */
}

.photo {
width: 200px; /* Adjust the image width as needed */
height: 200px; /* Adjust the image height as needed */
object-fit: cover; /* Ensure the image maintains its aspect ratio */
}

.caption {
font-weight: bold;
}

.description {
color: gray;
}

`}</style>