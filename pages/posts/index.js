import Layout from '../../components/layout';
import {Heading, Divider} from '@chakra-ui/react';
import { getAllPosts } from '../../lib/posts';
import PostSummary from '../../components/PostSummary';
import Link from 'next/link';

export async function getStaticProps() {
    const postData = getAllPosts();
    // postData will be available as a prop to PostListing at build time:
    return {
        props: {
            postData
        }
    }
}

function PostListing({postData}) {
    return (
        <Layout pageTitle="Blog">
            {
                postData.map(post => {
                    return (
                        <>
                            <PostSummary post={post} key={post.slug}/>
                        </>
                    )
                })
            }
        </Layout>
    )
}

export default PostListing;