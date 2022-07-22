import React from "react"

export default function Card() {
    return (
        <div className="card">
            <img src="src/images/milanpiscine.png" className="card--image" />
            <div className="card--stats">
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">Belgium</span>
            </div>
            <p>Swimming</p>
            <p><span className="bold">From $136</span>/ person</p>
        </div>
    )
}
