import style from "./Select.module.css";

export default function Select() {
  return (
    <select className={style.select} name="" id="">
      <option value="english">English (united States)</option>
      <option value="russian">Русский (Росиия)</option>
    </select>
  );
}
