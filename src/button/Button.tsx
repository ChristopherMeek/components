import styles from './Button.module.css'

export type ButtonProps = {
    label: string
    onClick: () => void
}

export function Button({ label, onClick }: ButtonProps) {
    return <button onClick={onClick} className={styles.main}>{label}</button>
}