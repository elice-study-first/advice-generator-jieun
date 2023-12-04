# Frontend Mentor - Advice generator app
![advice gnerator app2](https://github.com/elice-study-3rd/country-search-app/assets/108172664/cf086fdc-a65d-4d0c-ad4c-32ef6fa8216a)


## 프로젝트 소개
본 프로젝트는[Frontend Mentor](https://www.frontendmentor.io)의 advice generator app을 챌린지하여 제작되었습니다.

버튼을 클릭하면 랜덤으로 조언을 생성해주는 심플한 기능의 사이트입니다.

## 개발 환경

- library: `react`, `react-query`
- css framwork: `tailwind`

## 주요 기능

1. [Advice slip api](https://api.adviceslip.com/)를 `react-query`로 받아와 사용하였으며 버튼을 클릭했을 때 랜덤으로 새로운 조언 문구를 사용자에게 보여줍니다.
2. 데이터를 `localStorage`에 저장하여 새로고침 후에도 문구가 바뀌지 않으며 버튼 클릭시에만 문구가 변경됩니다.
3. react-query의 `isFetching` 옵션을 사용하여 데이터를 받아오는 동안 `loading`화면을 보여주도록하였습니다.
4. `typing custom hook` 컴포넌트를 생성하여 버튼을 클릭했을 때 타자를 치는 것과 같은 효과를 구현하였습니다.

## 프로젝트를 마치며
- 간단한 기능이었지만 fetch를 사용해 외부 API를 활용하는 방법에 대해 배우게 되었고 react-query를 이용하여 간편하게 refetch를 할 수 있었습니다.
- 이후에 react-query의 useMutation을 사용하여 데이터를 PUT, UPDATE, DELETE하는 기능도 사용해 보고 싶습니다.
- tailwind는 처음 사용해봤는데 css를 빠르게 작성하고 config에 원하는 속성을 커스텀하여 자유롭게 사용할 수 있다는 점에서 좋았지만 가독성 측면에서 살짝 아쉬웠는데 기능을 컴포넌트 단위로 세세하게 나누어 작성하여 가독성을 조금이나마 높일 수 있었습니다.