import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export function Layout({ children }: Props) {
    return (
        <div style={styles.container}>
            <div style={styles.card}>{children}</div>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    container: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f6f8",
        padding: "40px",
    },
    card: {
        width: "100%",
        maxWidth: "1000px",
        background: "white",
        borderRadius: "16px",
        padding: "40px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    },
};