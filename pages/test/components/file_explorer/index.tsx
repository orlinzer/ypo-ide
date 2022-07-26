import { GetServerSideProps, GetStaticPaths, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from "next";
import { useEffect, useState } from "react";
import FileExplorer from "../../../../components/FileExplorer/FileExplorer";

export type FileExplorerPageProps = {

} & InferGetServerSidePropsType<GetServerSideProps> &
  InferGetStaticPropsType<GetStaticProps>;

export const FileExplorerPage: NextPage<FileExplorerPageProps> = (props) => {

  const {} = props;

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // TODO: use axios on a data fetch module in lib directory
    fetch('/api/profile-data')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <>
      {JSON.stringify(data)}
    </>
  );
};


export type GetStaticPathsData = {
  id: string,
}[];


/**
 * If a page has Dynamic Routes and uses getStaticProps,
 * it needs to define a list of paths to be statically generated.
 *
 * When you export a function called getStaticPaths (Static Site Generation) from a page that uses dynamic routes,
 * Next.js will statically pre-render all the paths specified by getStaticPaths.
 *
 * `getStaticPaths` requires using `getStaticProps`
 *
 * You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes and:
 *  * The data comes from a headless CMS
 *  * The data comes from a database
 *  * The data comes from the filesystem
 *  * The data can be publicly cached (not user-specific)
 *  * The page must be pre-rendered (for SEO) and be very fast —
 *    getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance
 *
 * @returns
 */
export const getStaticPaths: GetStaticPaths = async (context) => {

  const {
    // contains all supported locales (if enabled).
    locales,

    // contains the configured default locale (if enabled).
    defaultLocale,
  } = context;

  // TODO: use Axios instead of fetch and put the entire function in the control directory that in the lib directory
  const result = await fetch('');
  const data: GetStaticPathsData = await result.json();

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = data.map((element) => ({
    params: { path: element.id },
  }));

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'

    // // We'll pre-render only these paths at build time.
    // // { fallback: blocking } will server-render pages
    // // on-demand if the path doesn't exist.
    // fallback: 'blocking',
  }
}


export type ServerSidePropsData = {

};


/**
 * When exporting a function called getServerSideProps (Server-Side Rendering) from a page,
 * Next.js will pre-render this page on each request using the data returned by getServerSideProps.
 * This is useful if you want to fetch data that changes often,
 * and have the page update to show the most current data.
 *
 * You can import modules in top-level scope for use in getServerSideProps.
 * Imports used will not be bundled for the client-side.
 * This means you can write server-side code directly in getServerSideProps,
 * including fetching data from your database.
 *
 * @param context
 * @returns
 */
export const getServerSideProps: GetServerSideProps = async (context) => {

  const {
    // If this page uses a dynamic route, params contains the route parameters.
    // If the page name is [id].js , then params will look like { id: ... }.
    params,

    // The HTTP IncomingMessage object,
    // with an additional cookies prop,
    // which is an object with string keys mapping to string values of cookies.
    req,

    // The HTTP response object.
    res,

    // An object representing the query string.
    query,

    // preview is true if the page is in the Preview Mode and false otherwise.
    preview,

    // The preview data set by setPreviewData.
    previewData,

    // A normalized version of the request URL that strips the _next/data prefix
    // for client transitions and includes original query values.
    resolvedUrl,

    // contains the active locale (if enabled).
    locale,

    // contains all supported locales (if enabled).
    locales,

    // contains the configured default locale (if enabled).
    defaultLocale,
  } = context;

  // TODO: use Axios instead of fetch and put the entire function in the control directory that in the lib directory
  const result = await fetch('');
  const data: ServerSidePropsData = await result.json();

  return {
    // The props object is a key-value pair,
    // where each value is received by the page component.
    // It should be a serializable object so that any props passed,
    // could be serialized with JSON.stringify.
    props: {
      data,
    },

    // The notFound boolean allows the page to return a 404 status and 404 Page.
    // With notFound: true, the page will return a 404 even if there was a successfully generated page before.
    // This is meant to support use cases like user-generated content getting removed by its author.
    notFound: false,

    // The redirect object allows redirecting to internal and external resources.
    // It should match the shape of { destination: string, permanent: boolean }.
    // In some rare cases, you might need to assign a custom status code for older HTTP clients to properly redirect.
    // In these cases, you can use the statusCode property instead of the permanent property, but not both.
    redirect: false,
  }
};


export type StaticPropsData = {

};


/**
 * If you export a function called getStaticProps (Static Site Generation) from a page,
 * Next.js will pre-render this page at build time using the props returned by getStaticProps.
 *
 * Note that irrespective of rendering type,
 * any props will be passed to the page component and can be viewed on the client-side in the initial HTML.
 * This is to allow the page to be hydrated correctly.
 * Make sure that you don't pass any sensitive information that shouldn't be available on the client in props.
 *
 * You should use getStaticProps if:
 *  * The data required to render the page is available at build time ahead of a user’s request
 *  * The data comes from a headless CMS
 *  * The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files,
 *    both of which can be cached by a CDN for performance
 *  * The data can be publicly cached (not user-specific).
 *    This condition can be bypassed in certain specific situation by using a Middleware to rewrite the path.
 *
 * @param context
 * @returns
 */
export const getStaticProps: GetStaticProps = async (context) => {

  const {
    // If this page uses a dynamic route, params contains the route parameters.
    // If the page name is [id].js , then params will look like { id: ... }.
    params,

    // preview is true if the page is in the Preview Mode and false otherwise.
    preview,

    // The preview data set by setPreviewData.
    previewData,

    // contains the active locale (if enabled).
    locale,

    // contains all supported locales (if enabled).
    locales,

    // contains the configured default locale (if enabled).
    defaultLocale,
  } = context;

  // TODO: use Axios instead of fetch and put the entire function in the control directory that in the lib directory
  const result = await fetch('');
  const data: StaticPropsData = await result.json();

  return {
    props: {}, // will be passed to the page component as props
    notFound: false,
    redirect: false,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: false, // 10,
  }
}


export default FileExplorerPage;
