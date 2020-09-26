import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import CodeText from '@elements/code-text';
import CodeHeading from '@elements/code-heading';
import CodeObject from '@elements/code-object';
import Demo from '@components/demo';
import styles from './work-section.module.scss';

const projects = [
  {
    title: 'Lorem Ipsum',
    stack: [
      { id: 'ReactJs', text: 'ReactJs' },
      { id: 'GatsbyJs', text: 'GatsbyJs' },
    ],
    demo: '/project-title',
    thumbnail: <img src="https://via.placeholder.com/380x240" alt="" />,
  },
  {
    title: 'Lorem Ipsum 2',
    stack: [
      { id: 'ReactJs', text: 'ReactJs' },
      { id: 'GatsbyJs', text: 'GatsbyJs' },
    ],
    demo: '/project-title',
    thumbnail: <img src="https://via.placeholder.com/380x240" alt="" />,
  },
  {
    title: 'Lorem Ipsum 3',
    stack: [
      { id: 'ReactJs', text: 'ReactJs' },
      { id: 'GatsbyJs', text: 'GatsbyJs' },
    ],
    demo: '/project-title',
    thumbnail: <img src="https://via.placeholder.com/380x240" alt="" />,
  },
  {
    title: 'Lorem Ipsum 4',
    stack: [
      { id: 'ReactJs', text: 'ReactJs' },
      { id: 'GatsbyJs', text: 'GatsbyJs' },
    ],
    demo: '/project-title',
    thumbnail: <img src="https://via.placeholder.com/380x240" alt="" />,
  },
  {
    title: 'Lorem Ipsum 5',
    stack: [
      { id: 'ReactJs', text: 'ReactJs' },
      { id: 'GatsbyJs', text: 'GatsbyJs' },
    ],
    demo: '/project-title',
    thumbnail: <img src="https://via.placeholder.com/380x240" alt="" />,
  },
];

// I dont need a map, just make it as input on project[input]
const WorkSection: React.FunctionComponent = () => {
  const router = useRouter();
  const projectsRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [openDemo, setOpenDemo] = useState(false);

  const handleChangeHash = (event) => {
    const { value } = event.target;
    const newHash = parseInt(value, 10);
    if (Number.isInteger(newHash)) {
      setCurrentProject(newHash);
      router.push(`${router.pathname}#project-${newHash}`);
    }
  };

  const handleOpenDemo = () => {
    setOpenDemo(!openDemo);
  };

  useEffect(() => {
    const { current } = projectsRef;

    if (current) {
      let isScrolling;

      const onShow = () => {
        clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
          const parentPosition = current.getBoundingClientRect();
          let currentChild;

          const children = current.childNodes;

          for (let index = 0; index < children.length; index += 1) {
            const child = children[index];
            const childPosition = child.getBoundingClientRect();
            if (
              (childPosition.top <= parentPosition.top + 20 &&
                childPosition.top >= parentPosition.top - 20) ||
              (childPosition.bottom <= parentPosition.bottom + 20 &&
                childPosition.bottom >= parentPosition.bottom - 20)
            ) {
              currentChild = child;
              break;
            }
          }

          if (currentChild) {
            setCurrentProject(currentChild.id.replace(/.*(\d+).*/, '$1'));
          }
        }, 50);
      };
      current.addEventListener('scroll', onShow, false);
      return () => current.removeEventListener('scroll', onShow);
    }
    return () => {};
  }, [projectsRef]);

  useEffect(() => {
    if (window.location.hash === '') {
      window.history.pushState(null, null, `#project-${currentProject}`);
    } else {
      window.history.pushState(null, null, `#project-${currentProject}`);
    }
  }, [currentProject]);

  return (
    <section className={clsx('section', styles.section)}>
      <CodeText className={styles.section__title}>
        current_page: <CodeHeading>work</CodeHeading> demo:{' '}
        <button
          type="button"
          className={styles.projects__button}
          onClick={handleOpenDemo}
        >
          {openDemo.toString()}
        </button>
      </CodeText>

      <div className={styles.section__container}>
        <CodeText className={styles.projects__input} noEnd>
          project[
          <input
            className={styles.projects__input__number}
            value={currentProject}
            onChange={handleChangeHash}
            type="number"
            max={projects.length - 1}
            min={0}
          />
          ]:
        </CodeText>
        <div ref={projectsRef} className={styles.projects}>
          {projects.map((project, index) => (
            <CodeObject
              tab={1}
              json={{
                ...project,
                demo: (
                  <button
                    type="button"
                    className={styles.projects__button}
                    onClick={handleOpenDemo}
                  >
                    {project.demo}
                  </button>
                ),
              }}
              id={`project-${index}`}
              key={project.title}
              className={styles.projects__item}
            />
          ))}
        </div>
        <CodeText className={styles.projects__input} noStart />
      </div>

      <Demo open={openDemo} projectId={currentProject} />
    </section>
  );
};

export default WorkSection;
