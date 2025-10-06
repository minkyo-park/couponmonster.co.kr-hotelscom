# 블로그 템플릿 사용 가이드

## 📝 개요

`blog-template.html`은 새로운 블로그 글을 작성할 때 사용하는 템플릿입니다. 
.md 파일의 내용을 이 템플릿에 맞춰 HTML로 변환하여 사용합니다.

## 🎯 사용 방법

### 1. 템플릿 복사
```bash
cp blog-template.html blog-[글번호]-[제목].html
```

### 2. 수정할 부분들

#### A. 메타데이터 수정
```html
<title>실제 글 제목 - 호텔스닷컴 할인 정보</title>
<meta name="description" content="실제 글 설명">
<meta name="keywords" content="실제 키워드들">
```

#### B. 브레드크럼 수정
```html
<span>실제 글 제목</span>
```

#### C. 아티클 헤더 수정
```html
<h1>실제 글 제목</h1>
<div class="article-meta">
    <span class="author">작성자명</span>
    <span class="date">실제 작성일</span>
    <span class="views">조회 0</span>
    <span class="reading-time">읽는 시간 X분</span>
</div>
<div class="article-tags">
    <a href="#" class="tag">#실제태그1</a>
    <a href="#" class="tag">#실제태그2</a>
    <!-- 필요한 만큼 추가 -->
</div>
```

#### D. 이미지 수정
```html
<img src="실제이미지URL" alt="실제이미지설명" style="border-radius: 15px;">
```

#### E. 본문 내용 수정
```html
<div class="article-body">
    <!-- .md 파일 내용을 HTML로 변환하여 여기에 넣기 -->
</div>
```

## 🔄 Markdown → HTML 변환 가이드

### 기본 변환 규칙

| Markdown | HTML |
|----------|------|
| `# 제목` | `<h1>제목</h1>` |
| `## 소제목` | `<h2>소제목</h2>` |
| `### 소소제목` | `<h3>소소제목</h3>` |
| `**굵은글씨**` | `<strong>굵은글씨</strong>` |
| `*기울임*` | `<em>기울임</em>` |
| `- 리스트` | `<ul><li>리스트</li></ul>` |
| `1. 번호리스트` | `<ol><li>번호리스트</li></ol>` |
| `[링크](URL)` | `<a href="URL">링크</a>` |
| `![이미지](URL)` | `<img src="URL" alt="설명">` |

### 특별한 스타일

#### 강조 박스
```html
<div class="highlight-box">
    <h4>💡 팁</h4>
    <p>중요한 정보나 팁을 강조하고 싶을 때 사용하세요.</p>
</div>
```

#### 인용문
```html
<blockquote>
    <p>인용하고 싶은 내용</p>
</blockquote>
```

#### 코드 블록
```html
<pre><code>
코드 내용
</code></pre>
```

## 📋 체크리스트

새로운 블로그 글을 만들 때 확인할 사항들:

- [ ] 파일명이 적절한가? (`blog-001-제목.html`)
- [ ] 메타데이터가 올바르게 설정되었는가?
- [ ] 제목이 정확한가?
- [ ] 작성자, 날짜, 태그가 올바른가?
- [ ] 이미지 URL이 정상 작동하는가?
- [ ] 본문 내용이 올바르게 변환되었는가?
- [ ] 관련 글 섹션이 적절한가?
- [ ] 모바일에서 잘 보이는가?

## 🎨 스타일 가이드

### 색상
- 메인 색상: `#ff4444` (빨간색)
- 텍스트: `#1a1a1a` (검은색)
- 배경: `#fff` (흰색)
- 보조 텍스트: `#666` (회색)

### 폰트
- 제목: `font-weight: 700`
- 소제목: `font-weight: 600`
- 본문: `font-weight: 400`

### 간격
- 섹션 간격: `2rem`
- 문단 간격: `1.5rem`
- 줄 간격: `1.8`

## 📱 반응형 고려사항

- 모바일에서는 제목 크기가 줄어듭니다
- 이미지는 자동으로 크기가 조정됩니다
- 태그는 자동으로 줄바꿈됩니다
- 소셜 공유 버튼은 세로로 배치됩니다

## 🔗 관련 글 설정

관련 글 섹션에서 수정할 부분:

```html
<div class="related-item">
    <img src="관련글이미지URL" alt="관련글설명" style="border-radius: 15px;">
    <h4>관련글제목</h4>
    <span class="date">관련글날짜</span>
</div>
```

## 📝 예시

### Markdown 원본
```markdown
# 2024년 최고의 호텔 할인 이벤트

## 신년 특가 이벤트

새해를 맞아 **최대 70% 할인**을 받을 수 있는 특별한 기회입니다.

### 주요 혜택
- 20% 추가 할인
- 무료 조식 제공
- 무료 업그레이드

> 💡 **팁**: 조기 예약 시 더 큰 할인을 받을 수 있습니다.
```

### HTML 변환 결과
```html
<h1>2024년 최고의 호텔 할인 이벤트</h1>

<h2>신년 특가 이벤트</h2>
<p>새해를 맞아 <strong>최대 70% 할인</strong>을 받을 수 있는 특별한 기회입니다.</p>

<h3>주요 혜택</h3>
<ul>
    <li>20% 추가 할인</li>
    <li>무료 조식 제공</li>
    <li>무료 업그레이드</li>
</ul>

<div class="highlight-box">
    <h4>💡 팁</h4>
    <p><strong>조기 예약 시 더 큰 할인을 받을 수 있습니다.</strong></p>
</div>
```

이제 .md 파일을 보내주시면 이 템플릿을 사용해서 완성된 블로그 글을 만들어드리겠습니다! 🚀

