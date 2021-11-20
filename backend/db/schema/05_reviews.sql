DROP TABLE IF EXISTS reviews CASCADE;

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  guide_id INTEGER REFERENCES guides(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  reservation_id INTEGER REFERENCES reservations(id) ON DELETE CASCADE,
  rating SMALLINT NOT NULL DEFAULT 0,
  message VARCHAR(255)
);