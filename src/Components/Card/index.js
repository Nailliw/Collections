import { useEffect } from 'react';
import './styles.css';
import { Card, Button, Avatar } from 'antd';
import { HeartOutlined, StopOutlined } from '@ant-design/icons';
const { Meta } = Card;
const CardTemplate = ({
  item,
  setFavorites,
  favorites,
  isRemovable = false,
}) => {
  const handleAddFavorite = (char) => {
    const alreadyExist = favorites.find(
      (element) => element.name === char.name,
    );
    if (alreadyExist) return;
    setFavorites([...favorites, char]);
  };

  const handleRemoveFavorite = (char) => {
    const newList = favorites.filter((character) => character.id !== char.id);
    localStorage.setItem('favoriteList', JSON.stringify(newList));
    setFavorites(newList);
  };

  useEffect(() => {
    localStorage.setItem('favoriteList', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div>
      <Card
        className="list"
        bordered={true}
        style={{ width: 250 }}
        title={item.name}
      >
        <Meta
          avatar={<Avatar src={item.image} />}
          description={
            isRemovable ? (
              <Button onClick={() => handleRemoveFavorite(item)}>
                <StopOutlined />
              </Button>
            ) : (
              <Button
                onClick={() => handleAddFavorite(item)}
                className="favorite-btn"
              >
                <HeartOutlined />
              </Button>
            )
          }
        />
      </Card>
    </div>
  );
};

export default CardTemplate;
