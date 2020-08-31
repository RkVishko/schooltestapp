const initialState = {
  colleges: [
    {
      name: 'UCLA',
      rooms: 52,
      students: [
        { fullName: 'Andrew Parker' },
        { fullName: 'John Doe' },
        { fullName: 'Test1Name' },
        { fullName: 'Test2Name' },
        { fullName: 'Test3Name' },
        { fullName: 'Test4Name' },
      ],
    },
    {
      name: 'Test Name1',
      rooms: 11,
      students: [{ fullName: 'Test1' }, { fullName: 'Test2' }],
    },
  ],
  majors: [
    { name: 'Humanities and Sciences Sciences', rooms: 25 },
    { name: 'Bachelor of Sciences', rooms: 21 },
    { name: 'Bachelor of Arts', rooms: 4 },
  ],
  degrees: [
    { name: 'Barchelor', rooms: 6 },
    { name: 'Master`s', rooms: 12 },
    { name: 'Ph.D', rooms: 2 },
  ],
  error: null,
  isPending: false,
  selected: null,
};

export const PENDING = (ACTION) => `${ACTION}_PENDING`;
const FULFILLED = (ACTION) => `${ACTION}_FULFILLED`;
const REJECTED = (ACTION) => `${ACTION}_REJECTED`;

export const COLLEGES_REQUEST = 'COLLEGES_REQUEST';
export const SELECT_COLLEGE = 'SELECT_COLLEGE';

export default (state = initialState, action) => {
  switch (action.type) {
    case PENDING(COLLEGES_REQUEST): {
      return { ...state, isPending: true };
    }

    case FULFILLED(COLLEGES_REQUEST): {
      return { ...state, isPending: false, colleges: [] };
    }

    case REJECTED(COLLEGES_REQUEST): {
      return { ...state, isPending: false, error: action.payload };
    }

    case SELECT_COLLEGE: {
      return { ...state, selected: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};

export const getColleges = ({ colleges }) => colleges;
export const getMajors = ({ majors }) => majors;
export const getDegrees = ({ degrees }) => degrees;
export const getSelectedCollege = ({ colleges, selected }) =>
  colleges[selected];
export const getSelected = ({ selected }) => selected;

export const setCollege = (index) => (dispatch) => {
  dispatch({
    type: SELECT_COLLEGE,
    payload: index,
  });
};

export const getCollegesAction = () => (dispatch) => {
  dispatch({
    type: PENDING(COLLEGES_REQUEST),
  });
  return fetch(
    `https://colleges.khughes.me/api/colleges?order=name&page=1,100&transform=1`,
  )
    .then((res) => {
      console.log(res.json(), 'collegesAPI');
      return res.json();
    })
    .then((json) =>
      dispatch({
        type: FULFILLED(COLLEGES_REQUEST),
        payload: json,
      }),
    )
    .catch((error) =>
      dispatch({
        type: REJECTED(COLLEGES_REQUEST),
        payload: error,
      }),
    );
};
