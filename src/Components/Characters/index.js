import './styles.css';
import CardTemplate from '../Card';
import { List } from 'antd';

const Characters = ({ characters, setFavorites, favorites }) => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
        xxl: 6,
      }}
      pagination={{
        showSizeChanger: true,
        pageSizeOptions: ['10', '50', '100'],
        responsive: true,
        pageSize: 10,
      }}
      dataSource={characters}
      renderItem={(item) => (
        <List.Item>
          <CardTemplate
            item={item}
            setFavorites={setFavorites}
            favorites={favorites}
          ></CardTemplate>
        </List.Item>
      )}
    ></List>
  );
};

export default Characters;
