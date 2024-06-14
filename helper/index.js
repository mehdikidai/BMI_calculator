export const getBMIDescription = (bmi) => {
    if (bmi < 18.5) {
        return { description: "Underweight", color: "#52c9f7" };
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return { description: "Normal", color: "#97cd17" };
    } else if (bmi >= 24.9 && bmi <= 29.9) {
        return { description: "Overweight", color: "#feda00" };
    } else if (bmi >= 29.9) {
        return { description: "Obese", color: "#fe0000" };
    } else {
        return { description: "Invalid BMI", color: "#fff3" };
    }
};
