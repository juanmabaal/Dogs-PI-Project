import style from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={style.spinnerContainer}>
      <div className={style.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;