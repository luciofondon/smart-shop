import React, { useEffect, useState } from 'react';

import EmptyState from './components/EmptyState';
import Item from './components/Item';
import Search from './components/Search';
import useListView from './useListView';
import './styles.css';

const ListView = () => {
  const {
    states: { products },
    actions: { handleChangeFilter },
  } = useListView();

  return (
    <>
      <div className="search-items">
        <Search handleChangeFilter={handleChangeFilter} />
      </div>

      {products.length === 0 ?
        <EmptyState /> :
        <div className="list-items">
          {
            products.map((product) => <Item product={product} key={product.id} />)}

        </div>
      }
    </>
  );
};

export default ListView;
