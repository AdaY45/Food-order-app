import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles["hero-section"]}>
      <div className={styles["text-block"]}>
        <h2 className={styles["text-header"]}>Best restaurant in the city</h2>
        <p className={styles["text-p"]}>
          Choose your favourite meal from our menu and enjoy delicious lunch or
          dinner at home
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
