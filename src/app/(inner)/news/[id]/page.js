'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPublicDocumentByIdAction } from '../../../../store/slices/authSlice';
import NewsViewer from '../../../../components/newsviewer';
import Header from "../../../../components/Header";
import { mockNews } from '../../../../data/mockNews';

export default function NewsArticlePage({ params }) {
  const dispatch = useDispatch();
  const { id } = params;

  useEffect(() => {
    if (id && !id.startsWith('mock-')) {
      dispatch(getPublicDocumentByIdAction(id));
    }
  }, [dispatch, id]);

  const newsArticleFromStore = useSelector(state => state.auth.currentDocument);
  
  // Support real data only
  const newsArticle = newsArticleFromStore;

  return (
    <>
        {/* <Header loggedIn={false}/> */}
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>
        {newsArticle ? <NewsViewer newsArticle={newsArticle} /> : <p>Загрузка новости...</p>}
    </>
  );
}
