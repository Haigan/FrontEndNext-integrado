import styles from "./styles.module.scss";

//para o input receber diferentes atribuições
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

//para poder ter diferentes placeholders e etc
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Input({ ...rest }: InputProps) {
  return <input className={styles.input} {...rest} />;
}

export function TextArea({ ...rest }: TextAreaProps) {
  return <textarea className={styles.input} {...rest}></textarea>;
}
