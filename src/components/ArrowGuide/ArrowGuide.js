import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ArrowGuide = ({ sections = [] }) => {
  const [activeSection, setActiveSection] = useState(null);
  
  // 示例章节数据，如果没有传入sections
  const defaultSections = [
    {
      id: 'intro',
      title: '01 入门',
      description: '本章节将详细介绍 Luckfox Omni3576 产品的基本信息、技术参数，以及如何快速上手使用该产品。',
      items: [
        { name: '产品介绍', url: '/docs/T113x/intro/product' },
        { name: '镜像烧录', url: '/docs/T113x/intro/flashing' }
      ]
    },
    {
      id: 'linux-config',
      title: '02 Linux系统配置指南',
      description: '本章节提供 LuckFox Omni3576 开发板上 Buildroot、Debian 12 和 Ubuntu 22.04 的使用与配置说明。',
      items: [
        { name: 'Buildroot', url: '/docs/T113x/linux/buildroot' },
        { name: 'Debian12（推荐）', url: '/docs/T113x/linux/debian' }
      ]
    },
    {
      id: 'android-usage',
      title: '03 Android 使用',
      description: '本章节将为您提供 Luckfox Omni3576 在Android环境下使用。',
      items: [
        { name: 'ADB 登录', url: '/docs/T113x/android/adb' }
      ]
    },
    {
      id: 'linux-dev',
      title: '04 Linux开发',
      description: '本章节将介绍在PC上搭建 Luckfox Omni3576 开发环境的步骤，包括SDK的基本介绍、开发环境搭建、编译Buildroot和Debian系统、内核定制，以及使用Docker简化开发流程。',
      items: [
        { name: 'SDK 开发环境搭建', url: '/docs/T113x/development/sdk' }
      ]
    },
    {
      id: 'appendix',
      title: '05 附录',
      description: '本章节提供了与 Luckfox Omni3576 相关的各种资源和支持信息。您可以在这里找到必要的烧录软件、开发工具，以及开发板的原理图、数据手册等技术文档。',
      items: [
        { name: '资料下载', url: '/docs/T113x/appendix/downloads' },
        { name: '技术支持', url: '/docs/T113x/appendix/support' }
      ]
    }
  ];

  const displaySections = sections.length > 0 ? sections : defaultSections;

  // 处理章节点击
  const handleSectionClick = (index, e) => {
    // 只有当点击的不是链接时才切换激活状态
    if (!e.target.closest('a')) {
      setActiveSection(activeSection === index ? null : index);
    }
  };

  // 处理章节项点击跳转
  const handleItemClick = (item, e) => {
    e.stopPropagation(); // 防止触发章节容器的点击事件
    
    if (item.url) {
      // 使用Docusaurus的路由进行导航
      window.location.href = item.url;
    }
  };

  // 规范化章节数据，确保每个item都有url属性
  const normalizeSections = (sections) => {
    return sections.map(section => ({
      ...section,
      items: section.items.map(item => 
        typeof item === 'string' 
          ? { name: item, url: `#${section.id}-${item.toLowerCase().replace(/\s+/g, '-')}` }
          : item
      )
    }));
  };

  const normalizedSections = normalizeSections(displaySections);

  return (
    <div className={styles.container}>
      <div className={styles.guideContainer}>
        {normalizedSections.map((section, index) => {
          // 将两个章节配对在同一行显示
          const isLeft = index % 2 === 0;
          const isRight = index % 2 !== 0;
          
          // 如果是右侧章节，跳过渲染，因为它已经在左侧章节中处理了
          if (isRight) return null;
          
          // 获取配对的右侧章节，如果没有则使用null
          const rightSection = normalizedSections[index + 1];
          
          return (
            <div key={section.id} className={clsx(styles.rowContainer, rightSection && styles.withConnection)}>
              {/* 左侧章节 */}
              <div 
                className={clsx(styles.sectionContainer, styles.left, {
                  [styles.active]: activeSection === index
                })}
                onClick={(e) => handleSectionClick(index, e)}
                id={section.id}
              >
                <div className={styles.sectionContent}>
                  <h3 className={styles.sectionTitle}>{section.title}</h3>
                  <p className={styles.sectionDescription}>{section.description}</p>
                  <div className={styles.sectionItems}>
                    {section.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className={styles.item}
                        onClick={(e) => handleItemClick(item, e)}
                        style={{ cursor: item.url ? 'pointer' : 'default' }}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* 右侧章节 */}
                  {rightSection && (
                    <div 
                      className={clsx(styles.sectionContainer, styles.right, {
                        [styles.active]: activeSection === index + 1
                      })}
                      onClick={(e) => handleSectionClick(index + 1, e)}
                      id={rightSection.id}
                    >
                      <div className={styles.sectionContent}>
                        <h3 className={styles.sectionTitle}>{rightSection.title}</h3>
                        <p className={styles.sectionDescription}>{rightSection.description}</p>
                        <div className={styles.sectionItems}>
                          {rightSection.items.map((item, itemIndex) => (
                            <div 
                              key={itemIndex} 
                              className={styles.item}
                              onClick={(e) => handleItemClick(item, e)}
                              style={{ cursor: item.url ? 'pointer' : 'default' }}
                            >
                              {item.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArrowGuide;