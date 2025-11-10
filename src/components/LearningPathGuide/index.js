import React, { useState } from 'react';
import clsx from 'clsx';
import styles from '../ArrowGuide/styles.module.css';

const LearningPathGuide = ({ 
  title = "学习路线",
  sections = [],
  showTitle = true,
  className = ""
}) => {
  const [activeSection, setActiveSection] = useState(null);

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

  const normalizedSections = normalizeSections(sections);

  return (
    <div className={clsx(styles.container, className)}>
      {showTitle && <h2 className={styles.guideTitle}>{title}</h2>}
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

export default LearningPathGuide;