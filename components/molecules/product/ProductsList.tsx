import * as React from "react";
import { Product } from "./Product";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
export interface IProductListProps {
  products: any;
}
export function ProductList(props: IProductListProps) {
  const router = useRouter();
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const items = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };
  const [filter, setFilter] = React.useState(false);
  setTimeout(() => {
    setFilter(true);
  }, 3000);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-[repeat(2,47%)] gap-y-4 justify-between w-[20rem] mx-auto sm:grid-cols-[repeat(3,32%)] sm:w-[35rem] md:grid-cols-[repeat(4,22%)] md:w-[40rem]"
    >
      <AnimatePresence>
        {[...props.products]
          // .filter((item) => (filter ? item.price === 22 : item.price === 32))
          .map((item: any, index: any) => {
            return (
              <motion.div
                layout={true}
                key={item.id}
                variants={items}
                onClick={() => router.push(`/productDetail/${item.id}`)}
              >
                <Product details={item} />
              </motion.div>
            );
          })}
      </AnimatePresence>
    </motion.div>
  );
}
