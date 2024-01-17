import { Animal } from '../../types/animal';
import { countLikesAndDislikes } from '../like-dislike-count';

describe('countLikesAndDislikes', () => {
  it('should count likes and dislikes correctly', () => {
    const animal = {
      taxonomy_key_preferences: {
        key1: 1,
        key2: -1,
        key3: 0,
      },
      characteristic_key_preferences: {
        key4: 1,
        key5: 0,
        key6: -1,
      },
    };

    const result = countLikesAndDislikes(animal as unknown as Animal);

    expect(result.likes).toBe(2);
    expect(result.dislikes).toBe(2);
  });

  it('should handle empty preferences', () => {
    const animal = {
      taxonomy_key_preferences: {},
      characteristic_key_preferences: {},
    };

    const result = countLikesAndDislikes(animal as unknown as Animal);

    expect(result.likes).toBe(0);
    expect(result.dislikes).toBe(0);
  });

  it('should handle only likes', () => {
    const animal = {
      taxonomy_key_preferences: {
        key1: 1,
        key2: 1,
        key3: 1,
      },
      characteristic_key_preferences: {},
    };

    const result = countLikesAndDislikes(animal as unknown as Animal);

    expect(result.likes).toBe(3);
    expect(result.dislikes).toBe(0);
  });

  it('should handle only dislikes', () => {
    const animal = {
      taxonomy_key_preferences: {},
      characteristic_key_preferences: {
        key4: -1,
        key5: -1,
        key6: -1,
      },
    };

    const result = countLikesAndDislikes(animal as unknown as Animal);

    expect(result.likes).toBe(0);
    expect(result.dislikes).toBe(3);
  });
});
