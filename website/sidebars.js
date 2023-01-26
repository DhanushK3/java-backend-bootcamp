/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  javaBackendBootcamp : [
    'java-backend-bootcamp/index',
    {
      type: 'category',
      label: 'Java Basics',
      link: {
        type: 'generated-index',
        title: 'Java Basics',
        slug: '/java-basics',
      },
      items: [
        'java-backend-bootcamp/java-basics/basic-data-types',
        'java-backend-bootcamp/java-basics/java-operators',
        'java-backend-bootcamp/java-basics/arrays',
        'java-backend-bootcamp/java-basics/classes',
        'java-backend-bootcamp/java-basics/static',
        'java-backend-bootcamp/java-basics/inheritance',
        'java-backend-bootcamp/java-basics/nested-and-inner-classes',
        'java-backend-bootcamp/java-basics/records',
      ],
    },
    {
      type: 'category',
      label: 'Java Collections',
      link: {
        type: 'generated-index',
        title: 'Java Collections',
        slug: '/java-collections'
      },
      items: [
        'java-backend-bootcamp/java-collections/introduction',
        'java-backend-bootcamp/java-collections/generalization-with-interfaces',
        'java-backend-bootcamp/java-collections/object-equality-and-hashcode',
        'java-backend-bootcamp/java-collections/time-complexity-and-big-o',
        'java-backend-bootcamp/java-collections/the-list-interface',
        'java-backend-bootcamp/java-collections/comparable-and-comparator',
        'java-backend-bootcamp/java-collections/the-set-interface',
        'java-backend-bootcamp/java-collections/the-map-interface',
      ],
    },
    {
      type: 'category',
      label: 'Java Lambdas and Streams',
      link: {
        type: 'generated-index',
        title: 'Java Lambdas and Streams',
        slug: '/lambdas-and-streams'
      },
      items: [
        'java-backend-bootcamp/lambdas-and-streams/functional-programming',
        'java-backend-bootcamp/lambdas-and-streams/lambda-expressions',
        'java-backend-bootcamp/lambdas-and-streams/custom-interfaces',
        'java-backend-bootcamp/lambdas-and-streams/best-practices',
        'java-backend-bootcamp/lambdas-and-streams/advanced-concepts',
        'java-backend-bootcamp/lambdas-and-streams/java-streams',
      ],
    },
  ]
};

module.exports = sidebars;
