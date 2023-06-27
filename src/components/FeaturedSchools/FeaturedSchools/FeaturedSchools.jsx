import React from "react";
import FeaturedSchool from "../FeaturedSchool/FeaturedSchool";
import '../../Cardss/Card/Card.css';

export default function FeaturedSchools(props) {
    const staticFeaturedSchools = [
        { schoolTitle: "ABC School", schoolType: "National" },
        { schoolTitle: "XYZ Academy", schoolType: "International" },
        { schoolTitle: "Sunshine Elementary", schoolType: "American" },
        { schoolTitle: "Bright Minds School", schoolType: "National" },
        { schoolTitle: "Global High School", schoolType: "International" },
        { schoolTitle: "Maplewood Middle School", schoolType: "American" },
        { schoolTitle: "Wonderland Preparatory", schoolType: "National" },
        { schoolTitle: "Eagle's Nest International School", schoolType: "International" },
        { schoolTitle: "Liberty Elementary", schoolType: "American" },
        { schoolTitle: "Evergreen Academy", schoolType: "National" },
        { schoolTitle: "Harmony International School", schoolType: "International" },
        { schoolTitle: "Pioneer Middle School", schoolType: "American" },
        { schoolTitle: "Creative Minds School", schoolType: "National" },
        { schoolTitle: "Global Connections Academy", schoolType: "International" },
        { schoolTitle: "Heritage High School", schoolType: "American" },
        { schoolTitle: "Discovery Elementary", schoolType: "National" },
        { schoolTitle: "Worldwide International School", schoolType: "International" },
        { schoolTitle: "American Dream Academy", schoolType: "American" },
    ];
    return (
        <div className="cards" style={{ maxWidth: 1360 }}>
            {staticFeaturedSchools.map((featuredSchool, index) => (
                <FeaturedSchool key={index} schoolTitle={featuredSchool.schoolTitle} schoolType={featuredSchool.schoolType} />
            ))}
        </div>
    );
}