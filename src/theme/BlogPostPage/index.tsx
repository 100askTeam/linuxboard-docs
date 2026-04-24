/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {BlogPostProvider} from '@docusaurus/plugin-content-blog/client';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import BlogPostPageStructuredData from '@theme/BlogPostPage/StructuredData';
import TOC from '@theme/TOC';
import type {Props} from '@theme/BlogPostPage';
import type {BlogSidebar} from '@docusaurus/plugin-content-blog';

export default function BlogPostPage(props: Props): ReactNode {
  const {content: BlogPostContents, sidebar} = props;

  return (
    <HtmlClassNameProvider
      className={clsx(
        'blog-page-expanded',
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogPostPage,
      )}>
      <BlogPostProvider content={BlogPostContents} isBlogPostPage>
        <BlogPostPageMetadata />
        <BlogPostPageStructuredData />
        <BlogLayout
          sidebar={sidebar}
          toc={
            <TOC
              toc={BlogPostContents.toc}
              minHeadingLevel={2}
              maxHeadingLevel={6}
              className={clsx(
                ThemeClassNames.defaults.toc,
                'col',
                'col--2',
              )}
            />
          }>
          <BlogPostItem content={BlogPostContents} />
          <BlogPostPaginator />
        </BlogLayout>
      </BlogPostProvider>
    </HtmlClassNameProvider>
  );
}
