import React from "react";

const System = () => {
  return (
    <>
      <Header />
      <section className={`main__grid ${store.isMenuOpen ? "open" : ""}`}>
        <aside className={`${store.isMenuOpen ? "open " : ""}   `}>
          <Navigation menu="settings" />
        </aside>
        <main className="px-2 lg:pr-10">
          <Breadcrumbs />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">System</h1>
            <button className="btn btn--accent btn--sm">Add</button>
          </div>
        </main>
      </section>
    </>
  );
};

export default System;
