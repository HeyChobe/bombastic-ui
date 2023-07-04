import { Dispatch, SetStateAction, useState } from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  total: number;
  onChange: Dispatch<SetStateAction<number | undefined>>;
  page: number | undefined;
  bgColor?: string;
  currentNumberColor?: string;
  numberColor?: string;
}

export default function Pagination({
  total = 7,
  onChange,
  page = 1,
  bgColor = "",
  numberColor = "",
  currentNumberColor = "",
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [arrayPage] = useState(Array.from({ length: total }, () => 1));

  const onSelectPage = (selected: number) => {
    if (selected >= 1 && selected <= total) {
      setCurrentPage(selected);
      onChange(selected);
    }
  };

  return (
    <div className={styles.container}>
      <svg
        onClick={() =>
          setCurrentPage((current) => {
            if (current === 1) return current;
            return current - 1;
          })
        }
        style={{
          rotate: "90deg",
        }}
        className={styles.icon}
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 10L12 15L17 10"
          stroke={bgColor !== "" ? bgColor : "var(--blue)"}
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className={styles["numbers-container"]}>
        {arrayPage.map((_, pageNumber) => {
          if (
            pageNumber + 1 >= currentPage - 1 &&
            pageNumber + 1 <= currentPage + 1
          )
            return (
              <div
                style={
                  pageNumber + 1 === currentPage
                    ? {
                        backgroundColor:
                          bgColor !== "" ? bgColor : "var(--blue)",
                        color:
                          currentNumberColor !== ""
                            ? currentNumberColor
                            : "var(--white)",
                      }
                    : {
                        backgroundColor: "var(--grey)",
                        color:
                          numberColor !== "" ? numberColor : "var(--black)",
                      }
                }
                className={styles.page}
                onClick={() => onSelectPage(pageNumber + 1)}
              >
                {pageNumber + 1}
              </div>
            );
          else return null;
        })}
      </div>
      <svg
        onClick={() =>
          setCurrentPage((current) => {
            if (current === total) return total;
            return current + 1;
          })
        }
        style={{
          rotate: "-90deg",
        }}
        className={styles.icon}
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 10L12 15L17 10"
          stroke={bgColor !== "" ? bgColor : "var(--blue)"}
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
