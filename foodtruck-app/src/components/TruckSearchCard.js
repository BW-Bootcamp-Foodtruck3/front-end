import React from "react";
import { Media } from "reactstrap";
import { Link } from "react-router-dom";

const TruckSearchCard = (props) => {
  const { id, truckName, imageOfTruck, cusineType, setSelectedData } = props
  const handleHighlight = e => {
    const style = e.currentTarget.style;
    if (style.background === "dimgray") {
      style.background = "ghostwhite";
      style.color = "black";
    } else {
      style.background = "dimgray";
      style.color = "white";
    }
  };

  return (
    <Link to={`test/${id}`} style={{ textDecoration: "none" }}>
        <Media
        style={styles.trucksearchcardContainer}
        onMouseOver={e => handleHighlight(e)}
        onMouseOut={e => handleHighlight(e)}
        onClick={() => setSelectedData(props)}
        >
        <Media left>
            <Media
            object
            src={imageOfTruck}
            alt={truckName}
            style={styles.trucksearchcardImg}
            />
        </Media>
        <Media body>
            <Media heading>{truckName}</Media>
            {cusineType}
        </Media>
        </Media>
    </Link>
  );
};

const styles = {
  trucksearchcardContainer: {
    alignItems: "center",
    background: "whitesmoke",
    marginBottom: 10,
    padding: 5,
    transition: "0.2s background ease-in",
  },
  trucksearchcardImg: {
    width: 64,
    marginRight: 10
  }
};

export default TruckSearchCard;
