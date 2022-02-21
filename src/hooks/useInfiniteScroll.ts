import { useEffect, useState } from 'react';
interface propsData {
  fetchMoreListItems: () => void
}
const useInfiniteScroll = (fetchMoreListItems:Function) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching, fetchMoreListItems]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching] as const;

}

export default useInfiniteScroll;