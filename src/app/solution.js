import React, { useState, useEffect, useCallback, useRef } from "react";
import { data } from "../app/data";
import gsap from "gsap";
// import img from "../../public/images/Untitled.png";
import "../../public/css/Solution.css";
import Image from "next/image";

const TheSolution = () => {
  const [overlayOpened, setOverlayOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const overlayRef = useRef(null);
  const tlRef = useRef(null);

  const updateOverlay = useCallback(
    (dataItem) => {
      setSelectedItem(dataItem);
      setOverlayOpened(true);
      if (tlRef.current) {
        tlRef.current.play();
      }
    },
    [setSelectedItem, setOverlayOpened]
  );

  useEffect(() => {
    const overlay = overlayRef.current;
    const closeBtn = document.querySelector("#close-btn");
    const items = document.querySelectorAll(".item");

    tlRef.current = gsap
      .timeline({ paused: true, reversed: true })
      .to(overlay, {
        duration: 0.5,
        right: "0px",
        rotation: 0,
        transformOrigin: "bottom bottom",
        ease: "power3.inOut",
      });

    items.forEach((item, index) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        updateOverlay(data[index]);
      });
    });

    closeBtn.addEventListener("click", () => {
      if (tlRef.current) {
        tlRef.current.reverse();
        tlRef.current.eventCallback("onReverseComplete", () => {
          setOverlayOpened(false);
          setSelectedItem(null);
        });
      }
    });

    document.addEventListener("click", (e) => {
      if (!overlay.contains(e.target) && !e.target.closest(".item")) {
        if (tlRef.current) {
          tlRef.current.reverse();
          tlRef.current.eventCallback("onReverseComplete", () => {
            setOverlayOpened(false);
            setSelectedItem(null);
          });
        }
      }
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener("click", updateOverlay);
      });
      closeBtn.removeEventListener("click", tlRef.current.reverse);
    };
  }, [updateOverlay]);

  useEffect(() => {
    const overlay = overlayRef.current;

    const preventScroll = (e) => {
      e.stopPropagation();
    };

    if (overlay) {
      overlay.addEventListener("wheel", preventScroll);
    }

    return () => {
      if (overlay) {
        overlay.removeEventListener("wheel", preventScroll);
      }
    };
  }, [overlayRef]);

  return (
    <div className="w-[100vw] h-[100vh] sm-container overflow-hidden text-[#000]">
      <div className="nav">
        <p>Techviz</p>
        <p>Features</p>
      </div>

      <div
        className={`overlay ${overlayOpened ? "open" : ""}`}
        ref={overlayRef}
      >
        <div className="overlay-header">
          <div className="col1">
            <h1 id="item-name">
              {selectedItem ? selectedItem.itemName : "Item Name"}
            </h1>
            <p id="item-category"></p>
          </div>
          <div className="col1">
            <p id="close-btn">
              <ion-icon name="close-sharp"></ion-icon> Close
            </p>
          </div>
        </div>
        <div className="item-details">
          <p id="item-copy">
            {selectedItem
              ? selectedItem.itemCopy
              : "Lorem ipsum dolor sit amet..."}
          </p>
        </div>
        {selectedItem && (
          <div className="img-container">
            <Image
              className="w-full h-full object-cover"
              src={selectedItem ? selectedItem.itemImage : "hey"}
              id="item-img"
              width={500}
              height={500}
              loading="eager"
              layout="responsive"
              
              alt=""
            />
          </div>
        )}
      </div>
      <div className="s-container">
        <div className="items">
          {console.log("Rendering items:", data)}
          {data.map((item, index) => {
            return (
              <div className="item" data-index={index} key={index}>
                <div className="item-index">{`0${index + 1}.`}</div>
                <div className="item-name">
                  {item.itemName}
                  <ion-icon name="arrow-forward-sharp"></ion-icon>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TheSolution;
