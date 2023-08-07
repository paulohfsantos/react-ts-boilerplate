import React from "react";
import { Header } from "../components/Header";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between">
      <Header />

      <div className="container mx-auto px-4">
        <div className="card glass w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
};
