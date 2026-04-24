/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license.
 */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/BlogSidebar';
import styles from './styles.module.css';

function groupByYear(
  posts: Props['sidebar']['items'],
): Record<string, Props['sidebar']['items']> {
  const result: Record<string, Props['sidebar']['items']> = {};
  posts.forEach((post) => {
    const date = new Date(post.date);
    const year = date.getFullYear().toString();
    if (!result[year]) {
      result[year] = [];
    }
    result[year].push(post);
  });
  return result;
}

export default function BlogSidebar({sidebar}: Props): JSX.Element {
  if (!sidebar?.items?.length) {
    return null;
  }

  const grouped = groupByYear(sidebar.items);
  const years = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  return (
    <div className={clsx('col', 'col--3')}>
      <nav className={clsx(styles.sidebarContainer, 'thin-scrollbar')}>
        <div className={styles.sidebarPostList}>
          <h3 className={styles.sidebarTitle}>📝 最新文章</h3>
          {sidebar.items.slice(0, 10).map((post) => (
            <Link
              key={post.permalink}
              to={post.permalink}
              className={clsx(styles.sidebarPostItem, {
                [styles['sidebarPostItem--active']]: post.permalink === sidebar.currentPage,
              })}>
              <div className={styles.sidebarPostTitle}>{post.title}</div>
              <div className={styles.sidebarPostDate}>
                {new Date(post.date).toLocaleDateString('zh-CN')}
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.sidebarPostList}>
          <h3 className={styles.sidebarTitle}>📅 按年份归档</h3>
          {years.map((year) => (
            <div key={year} className={styles.sidebarYearGroup}>
              <div className={styles.sidebarYearLabel}>{year} 年</div>
              {grouped[year].map((post) => (
                <Link
                  key={post.permalink}
                  to={post.permalink}
                  className={clsx(styles.sidebarPostItem, {
                    [styles['sidebarPostItem--active']]: post.permalink === sidebar.currentPage,
                  })}>
                  <div className={styles.sidebarPostTitle}>{post.title}</div>
                  <div className={styles.sidebarPostDate}>
                    {new Date(post.date).toLocaleDateString('zh-CN')}
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.sidebarPostList}>
          <h3 className={styles.sidebarTitle}>🔗 快速导航</h3>
          <Link to="/blog/tags" className={styles.sidebarQuickLink}>
            🏷️ 标签列表
          </Link>
        </div>
      </nav>
    </div>
  );
}
