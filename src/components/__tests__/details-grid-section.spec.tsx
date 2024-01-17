import { fireEvent, render, screen } from '@testing-library/react';

import { titleCase } from '@utils/titlecase';

import DetailsGridSection from '../details-grid-section';

describe('DetailsGridSection', () => {
  const entries: [key: string, value: string][] = [
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
  ];

  const title = 'Test Title';
  const titleIcon = <div>Test Icon</div>;
  const gridClassName = 'test-grid-class';
  const keyPreferences: Record<string, 1 | -1> = {
    key1: 1,
    key2: -1,
  };
  const keyPreferencesAction = jest.fn();
  const onKeyPreferenceClick = jest.fn(() => keyPreferencesAction);

  beforeEach(() => {
    render(
      <DetailsGridSection
        entries={entries}
        title={title}
        titleIcon={titleIcon}
        gridClassName={gridClassName}
        keyPreferences={keyPreferences}
        onKeyPreferenceClick={onKeyPreferenceClick}
      />,
    );
  });

  test('renders title and entries correctly', () => {
    expect(screen.getByText(title)).toBeDefined();
    expect(screen.getByText('Test Icon')).toBeDefined();

    entries.forEach(([key, value]) => {
      expect(screen.getByText(`${titleCase(key)}:`)).toBeDefined();
      expect(screen.getByText(value)).toBeDefined();
    });
  });

  test('handles key preference click correctly', () => {
    const key = 'key1';
    const likeButton = screen.getByLabelText(`${key}-like`);
    const dislikeButton = screen.getByLabelText(`${key}-dislike`);

    fireEvent.click(likeButton);
    expect(onKeyPreferenceClick).toHaveBeenCalledWith(key);
    expect(keyPreferencesAction).toHaveBeenCalledWith(1);

    fireEvent.click(dislikeButton);
    expect(onKeyPreferenceClick).toHaveBeenCalledWith(key);
    expect(keyPreferencesAction).toHaveBeenCalledWith(-1);
  });
});
