'use client';
import React, { useEffect } from 'react';
import styles from './BookmarksBox.module.css';
import { Session } from 'next-auth';
import useGetUsersBookmarks from '../hooks/useGetUsersBookmarks';
import BookmarkCard from '../components/BookmarkCard';

interface BookmarksBoxProps {
  session: Session | null;
}

interface Bookmark {
  id: string;
  location: {
    id: string;
    name: string;
    category: string;
    imageWebLink: string;
  };
  creationDate: string;
}

//application\src\app\profile\bookmarks.modules.css

const BookmarksBox: React.FC<BookmarksBoxProps> = ({ session }) => {
  const { usersBookmarks, fetchUsersBookmarks, loading } = useGetUsersBookmarks();

  useEffect(() => {
    if (session) {
      fetchUsersBookmarks(session.user.id);
    }

    // DO NOT INCLUDE fetchUsersBookmarks IN DEPENDENCIES | It will cause infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <div className={`${styles.bookmarksBox} overflow-y-scroll`}>
      <h2 className={`${styles.title} font-josefin py-5`}>Bookmarks</h2>
      {usersBookmarks.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No bookmarks available. Start adding some!
        </div>
      ) : (
        <div className="flex flex-col gap-6 mt-6 px-5">
          {usersBookmarks.map((bookmark: Bookmark) => (
            <BookmarkCard key={bookmark.id} bookmark={bookmark} />
          ))}
        </div>
      )}
    </div>

  );
};

export default BookmarksBox;
