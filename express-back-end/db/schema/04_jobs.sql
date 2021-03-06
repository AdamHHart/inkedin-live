DROP TABLE IF EXISTS jobs CASCADE;
CREATE TABLE jobs (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  pay INTEGER NOT NULL,
  company VARCHAR(255),
  location VARCHAR(255),
  posted_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT UC_jobs UNIQUE(title, user_id)
); 


