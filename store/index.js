export const state = () => ({
  currentHash: null,
  inScrollBehavior: false,
  roofMaterials: [
    { img: 'polycarbonate', title: 'поликарбонат', subtitle: 'поликарбоната', price: '100 ₽/м²' },
    { img: 'corrugated_board', title: 'профнастил', subtitle: 'профнастила', price: '200 ₽/м²' },
    { img: 'soft_roof', title: 'мягкая кровля', subtitle: 'мягкой кровли', price: '300 ₽/м²' },
    { img: 'metal_tile', title: 'металлочерепица', subtitle: 'металлочерепицы', price: '400 ₽/м²' }
  ],
  navigationIds: [
    'constructions',
    'examples',
    'maket',
    'canopies',
    'guarantees',
    'contacts'
  ],
  links: [
    { title: 'типы навесов', id: 'constructions' },
    { title: 'примеры работ', id: 'examples' },
    { title: '3D-маркет', id: 'maket' },
    { title: 'цены на навесы', id: 'canopies' },
    { title: 'гарантии', id: 'guarantees' },
    { title: 'контакты', id: 'contacts' }
  ]
})

export const getters = {
  getCurrentHash: state => state.currentHash,
  getScrollBehavior: state => state.inScrollBehavior,
  getRoofMaterials: state => state.roofMaterials,
  getNavigationIds: state => state.navigationIds,
  getLinks: state => state.links,
}

export const mutations = {
  setCurrentHash(state, value) {
    state.currentHash = value
  },
  setInScrollBehavior(state, value) {
    state.inScrollBehavior = value
  }
}