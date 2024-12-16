import useGetContentClientSide from "@/hooks/cms/useGetContentClientSide";
import { BlogArticle } from "@/types/blog.types";
import { createContext, ReactNode, useContext } from "react";

type AppContextType = {
  articles?: BlogArticle[];
  loadingArticles: boolean;
  errorArticles: boolean;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const {
    data: articles,
    loading: loadingArticles,
    error: errorArticles,
  } = useGetContentClientSide({
    path: "/blog-articulos",
    query: "populate=*&sort=createdAt:desc",
  });
  console.log(articles);
  const contextValue: AppContextType = {
    articles,
    loadingArticles,
    errorArticles,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within a AppContextProvider");
  }

  return context;
};
