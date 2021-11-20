 DROP TABLE IF EXISTS listings CASCADE;

CREATE TABLE listings (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  thumbnail_photo_url VARCHAR(255) NOT NULL,
  guide_id INTEGER REFERENCES guides(id),
  description VARCHAR(255)
);