import { useState } from "react";

export   const  useDisplaySuccessMsg = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const DisplaySuccessMsg = () => {
        setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
    };

    return { isSubmitted, DisplaySuccessMsg };
};