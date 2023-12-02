import React, { Component, useRef } from 'react'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

export default function CountUpUtil({ startValue, endValue }) {
    return (
        <>
            <CountUp start={startValue} end={endValue} duration="2">
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
        </>
    )
}
